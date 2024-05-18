import React, { useContext, useEffect } from 'react';
import { TbMessageQuestion } from "react-icons/tb";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { IoLibraryOutline } from "react-icons/io5";
import {CommentOutlined, LikeOutlined, QuestionCircleOutlined, UserOutlined} from "@ant-design/icons"
import { FaPencilAlt } from 'react-icons/fa';
import  { useStateValue } from '../contex/AppContext';
import { Link } from 'react-router-dom';



const Title = () => {

  const {state,dispatch} = useStateValue();
  const {quizzes} = state;

    console.log('title la', quizzes?.questions);
  


  return (
    <div className ="relative flex  w-full flex-col rounded-xl bg-yellow-200 bg-clip-border text-gray-700 shadow-md">
  <div className='flex-col flex '>
        <div className='flex items-center  flex-col'>
          <div className='flex items-end'>
        <TbMessageQuestion className="w-[50px] h-[50px]  bg-blue-600 rounded-xl mt-2 justify-center" />
        <button className=" hover:text-blue-500  py-1 px-2 rounded ml-auto inline-flex items-center">
          <Link to="/editQuiz" >
              <FaPencilAlt className="ml-2" />
            </Link>
          </button>
        
        </div>
        <p className="font-bold mt-2 justify-center ">{quizzes?.title}</p>
        </div>
        <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
        <div className="flex items-center ml-5">
          <MdOutlineQuestionAnswer />
          <p className='pl-1 '> {quizzes?.questions.length} Quesitons </p>
          </div>
          <div className='flex items-center ml-5 '>
          <IoLibraryOutline />
          <p className='pl-1'>{quizzes?.category}</p>
        </div>
        <div className='flex items-center ml-5' > 
          <UserOutlined />
          <p className='pl-2'>{quizzes?.createdBy.name}</p> 
        </div>
        </div>
        <div className="p-4 pt-3 flex justify-center">
    <button
      className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      PLAY
    </button>
  </div>
  </div>
  <div className="flex items-center ml-5">
          <LikeOutlined />
          <p className='pl-2 pr-5'>{quizzes?.likes}</p>
          <button className=" hover:text-green-600  py-1 px-2 rounded ml-auto inline-flex items-center">
            
            <CommentOutlined />
            <p className='pl-2 pr-5'>{quizzes?.comments.length}</p> 
            
          </button>
          
          
          <button className=" hover:text-green-600  py-1 px-2 rounded ml-auto inline-flex items-center">
            
            <QuestionCircleOutlined className='mx-1'/> 
            
          </button>
          
          </div>

      </div>
    
  
</div>
  )
}

export default Title;