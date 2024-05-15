import React, { useContext, useEffect, useState } from 'react'
import { TbMessageQuestion } from "react-icons/tb";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { IoLibraryOutline } from "react-icons/io5";
import {UserOutlined} from "@ant-design/icons"
import quizService from '../services/quizService';
import { toast } from 'react-toastify';
import { Pagination } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../contex/AppContext';
import AppReducer from '../reducers/AppReducer';



export default function MyLibrary() {

  const {state,dispatch} = useStateValue();

  const {user,quizzes} = state;
  const [quizDetail, setQuizDetail] = useState();
  const [allQuizzes,setAllQuizzes] = useState([]);
  const [totalPages,setTotalPages] =useState(0);
  const [page,setPage] = useState(1);
  const PAGE_SIZE = 5;
  const navigate = useNavigate();
  
  useEffect(()=>{

  const getAllMyQuizzes = async() =>{

    try {
      console.log("getAllMyQuiz function executed",user.user._id);
      const response = await quizService.getAllMyQuizzes(user.user._id, {
        page: page, 
        limit: PAGE_SIZE
      });    
      console.log("response  la :",response.data.data,page);
      setAllQuizzes(response.data.data.quizzes);
      setTotalPages(response.data.totalPages);
} catch (error) {
      toast.error(error)}
}
  
getAllMyQuizzes();
  },[page])

  

  const getQuizDetail = async (quizId) => {
    try {
    
      const response = await quizService.getQuizDetails(quizId);
      console.log('detail la', response.data.quiz); 
      dispatch({ type: "GET_DETAILS_ONE_QUIZ", payload: response.data.quiz });
      console.log('details one quiz', state);
      navigate("/quizDetails/:quizId");
    } catch (error) {
      toast.error(error);
    } 
  };

  // useEffect(() => {
  //   console.log("Updated state:", state);
  // }, [state]);



  const onChange = (pageNumber) => {
    console.log('Page: ', pageNumber);
    setPage(pageNumber); // Cập nhật trang hiện tại
  }

  return (
    <div className='h-full w-full bg-gray-200 flex items-center justify-center'>
       <div className="flex justify-end mt-2">
    <div className="pl-10 bg-gray-200 w-[1000px] h-[700px] ">
        <h1 className="mx-5 my-5 text-2xl font-bold">My Library</h1>
        <div className="grid grid-rows-4 gap-1 ">

        {allQuizzes.map((quiz,index)=> {
  return (
    <div key={index} className="w-[800px] h-[110px] bg-white flex relative bg-clip-border rounded-xl p-2 shadow-md">
      <TbMessageQuestion className="w-[95px] h-[95px] bg-blue-600 rounded-xl" />
      <div className="ml-5 mt-1">
        
        <button onClick={()=>getQuizDetail(quiz._id)} className="rounded-lg bg-gray-200 w-[45px]">Quiz</button>
      
        <p className="font-bold">{quiz.title}</p>
        <div className="flex items-center">
          <MdOutlineQuestionAnswer />
          <p className='pl-2 pr-10'>{quiz.questionCount} Questions</p>
          <IoLibraryOutline />
          <p className='pl-2'>{quiz.category}</p>
        </div>
        <div className='flex items-center' > 
          <UserOutlined />
          <p className='pl-2'>{quiz.createdBy.name}</p> 
          <button className="bg-violet-700 w-[80px] h-15px] absolute right-1 bottom-1 rounded-md text-white mr-2 ">Play</button>
        </div>
      </div>
    </div>
  );
})}
        </div>
        <div className='flex justify-center'>
        <Pagination
        pageSize={PAGE_SIZE} 
        defaultCurrent={page} 
        total={totalPages * PAGE_SIZE} 
        onChange={onChange} 
      />
      </div>
      </div>
    </div>
    

    </div>
    
    
  )

}