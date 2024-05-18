import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
  Select,
  Upload,
} from 'antd';
import { useStateValue } from '../contex/AppContext';

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const QuizSetting = () => {

  const {state} = useStateValue();

  const {user,quizzes} = state;
  
  return (
    <>
      <div className =" relative p-5 w-full  flex  flex-col rounded-xl bg-yellow-200 bg-clip-border text-gray-700 shadow-md">
        <div className='flex items-center justify-center'>
        <h1 >QUIZ SETTING</h1>
        </div>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 30,
        }}
        layout="vertical"
      initialValues={{name:quizzes?.title,category:quizzes?.category}}
        style={{
          maxWidth: 600,
        }}
      >
        
        
        <Form.Item label="Name :"  name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Category :"  name="category">
          <Select>
            <Select.Option value="languae">Ngon ngu</Select.Option>
            <Select.Option value="math">Toan hoc</Select.Option>
            <Select.Option value="sicence">Khoa hoc</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item  valuePropName="fileList" getValueFromEvent={normFile} wrapperCol={{ offset: 7 }}>
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Add cover Image
              </div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 7 }} >
          <Button>Publish</Button>
        </Form.Item>
      </Form>
      </div>
    </>
  );
};
export default () => <QuizSetting />;