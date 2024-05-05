import React, { useState,useEffect } from "react";
import { IoIosCheckboxOutline } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { CheckOutlined } from "@ant-design/icons";
import { toast } from 'react-toastify';
import questionService from '../services/questionService';
import { useLocation } from "react-router";




const Question = ({ sendData }) => {
  const [allQuestions,setAllQuestions] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const quizId = searchParams.get('quizId');

  
  
  const getAllQuestions = async() =>{
    try {
      console.log("getAllQuestions function executed");
      const response = await questionService.getAll({ params: {quizId: quizId }});  
      console.log("response  la :",response.data.data);
      setAllQuestions(response.data.data.questions);
      sendData(response.data.data);

} catch (error) {
      console.log(error)}
}

useEffect(()=>{
  

getAllQuestions();
  },[])
  
 

  return (
  <>
  
  {allQuestions.map((question,index)=>{
    return (
      <div key={index} className =" flex w-full  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md px-4 py-2 mb-2 " >
  

        <div className="flex items-center mb-1 w-full">
          <div className="flex items-center">
            <IoIosCheckboxOutline  className="text-green-500 font-bold"/>
            <span className="font-bold">1. Nhiều lựa chọn</span>
          </div>
          <button className="bg-purple-500 hover:bg-purple-900 text-white py-1 px-2 rounded ml-auto inline-flex items-center">
              <FaPencilAlt className="mr-1" />
              <span>Chỉnh sửa</span>
          </button>
        </div>
        <div className="text-2xl mb-1 w-full relative">
          <span className="px-2">{index+1}.</span>
          <span>{question.question}</span>
        </div>
        <hr className="w-full border-1 border-b-3 bg-gray-200 "  />
        <br></br>
        <div className="flex flex-col md:flex-row justify-center gap-4 w-full mb-3">
        {/* Đáp án 1 */}
          <div className="md:w-1/2 w-full flex">
          
          <span className={`rounded-full w-6 h-6 flex items-center justify-center
               ${question.correctOption === 1 ? 'bg-green-500' : 'bg-red-500'}`}>
                <span className="text-ls">1</span>
              </span>
              <span className="ml-2">{question.options[0]}</span>
          
          </div>

          {/* Đáp án 2 */}
          <div className="md:w-1/2 w-full flex">
          <span className={`rounded-full w-6 h-6 flex items-center justify-center
               ${question.correctOption === 2 ? 'bg-green-500' : 'bg-red-500'}`}>
                <span className="text-ls">2</span>
              </span>
              <span className="ml-2">{question.options[1]}</span>
          
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 w-full mb-3">
        {/* Đáp án 3 */}
        <div className="md:w-1/2 w-full flex">
        <span className={`rounded-full w-6 h-6 flex items-center justify-center
               ${question.correctOption === 3 ? 'bg-green-500' : 'bg-red-500'}`}>
                <span className="text-ls">3</span>
              </span>
              <span className="ml-2">{question.options[2]}</span>
          
          </div>

          {/* Đáp án 4 */}
          <div className="md:w-1/2 w-full flex">
          <span className={`rounded-full w-6 h-6 flex items-center justify-center
               ${question.correctOption === 4 ? 'bg-green-500' : 'bg-red-500'}`}>
                <span className="text-ls">4</span>
              </span>
              <span className="ml-2">{question.options[3]}</span>
          
          </div>
        </div>
    </div>
    )
  })}
  </>)
};

export default Question;
