import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Upload } from 'antd';
import { useStateValue } from '../contex/AppContext';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import quizService from '../services/quizService';

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const QuizSetting = () => {
  const { state, dispatch } = useStateValue();
  const { user, quizzes } = state;
  const navigate = useNavigate();

  const [quizDetails, setQuizDetails] = useState(quizzes);
  const [formData, setFormData] = useState();

  const handleChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value
    }));
  };

  const updateQuiz = async () => {
    try {
      console.log('quizdetail la',formData)
      const response = await quizService.update(quizzes._id, formData);

      console.log('Updated quiz:', response.data.data.quiz);
      dispatch({ type: 'GET_DETAILS_ONE_QUIZ', payload: response.data.data.quiz });
      navigate(`/quizDetails/${quizzes._id}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="relative p-5 w-full flex flex-col rounded-xl bg-yellow-200 bg-clip-border text-gray-700 shadow-md">
        <div className="flex items-center justify-center">
          <h1>QUIZ SETTING</h1>
        </div>
        <Form
          labelCol={{
            span: 8
          }}
          wrapperCol={{
            span: 30
          }}
          layout="vertical"
          initialValues={{ title: quizDetails?.title, category: quizDetails?.category }}
          style={{
            maxWidth: 600
          }}
          onFinish={updateQuiz}
        >
          <Form.Item label="Name :" name="title">
            <Input onChange={(e) => handleChange('title', e.target.value)} />
          </Form.Item>
          <Form.Item label="Category :" name="category">
            <Select onChange={(value) => handleChange('category', value)}>
              <Select.Option value="language">Ngon ngu</Select.Option>
              <Select.Option value="math">Toan hoc</Select.Option>
              <Select.Option value="science">Khoa hoc</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item valuePropName="fileList" getValueFromEvent={normFile} wrapperCol={{ offset: 7 }}>
            <Upload action="/upload.do" listType="picture-card">
              <button style={{ border: 0, background: 'none' }} type="button">
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Add cover Image</div>
              </button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 7 }}>
            <Button htmlType="submit">Publish</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default QuizSetting;