import React, { useState,useEffect, useContext } from "react";
import { IoIosCheckboxOutline } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { toast } from 'react-toastify';
import quizService from "../services/quizService";
import AppContext from '../contex/AppContext';



const Question = () => {
  
  const [allQuestions,setAllQuestions] = useState([]);
  
  const {state,dispatch} = useContext(AppContext);

  const {user,quizzes} = state;
  
  useEffect(()=>{
  const getQuizDetails = async() =>{

    try {
      console.log("getQuizDetails function executed",quizzes._id);
      const response = await quizService.getQuizDetails(quizzes._id);    
      console.log("questions  la :",response.data.quiz.questions);
      setAllQuestions(response.data.quiz.questions);
} catch (error) {
      toast.error(error)}
}
  
getQuizDetails();
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
              
          </button>
        </div>
        <div className="text-2xl mb-1 w-full relative">
          <span className="px-2">{index+1}.</span>
          <span>{question.questionName}</span>
        </div>
        <hr className="w-full border-1 border-b-3 bg-gray-200 "  />
        <br></br>
        <div className="flex flex-col md:flex-row justify-center gap-4 w-full mb-3">
        {/* Đáp án 1 */}
          <div className="md:w-1/2 w-full flex">
          
          <span className={`rounded-full w-6 h-6 flex items-center justify-center
               ${question.correctAnswer === 1 ? 'bg-green-500' : 'bg-red-500'}`}>
                <span className="text-ls">1</span>
              </span>
              <span className="ml-2">{question.answers[0].name}</span>
          
          </div>

          {/* Đáp án 2 */}
          <div className="md:w-1/2 w-full flex">
          <span className={`rounded-full w-6 h-6 flex items-center justify-center
               ${question.correctAnswer === 2 ? 'bg-green-500' : 'bg-red-500'}`}>
                <span className="text-ls">2</span>
              </span>
              <span className="ml-2">{question.answers[1].name}</span>
          
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 w-full mb-3">
        {/* Đáp án 3 */}
        <div className="md:w-1/2 w-full flex">
        <span className={`rounded-full w-6 h-6 flex items-center justify-center
               ${question.correctAnswer === 3 ? 'bg-green-500' : 'bg-red-500'}`}>
                <span className="text-ls">3</span>
              </span>
              <span className="ml-2">{question.answers[2].name}</span>
          
          </div>

          {/* Đáp án 4 */}
          <div className="md:w-1/2 w-full flex">
          <span className={`rounded-full w-6 h-6 flex items-center justify-center
               ${question.correctAnswer === 4 ? 'bg-green-500' : 'bg-red-500'}`}>
                <span className="text-ls">4</span>
              </span>
              <span className="ml-2">{question.answers[3].name}</span>
          
          </div>
        </div>
    </div>
    )
  })}
  </>)
};

export default Question;
