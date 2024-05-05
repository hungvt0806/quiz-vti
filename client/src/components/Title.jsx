import React, { useEffect } from 'react';
import { TbMessageQuestion } from "react-icons/tb";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { IoLibraryOutline } from "react-icons/io5";
import {UserOutlined} from "@ant-design/icons"
import { FaPencilAlt } from 'react-icons/fa';


const Title = (getData) => {
  useEffect(() => {
    console.log('getData la', getData);
  }, [getData]);


  return (
    <div className ="relative flex  w-full flex-col rounded-xl bg-yellow-200 bg-clip-border text-gray-700 shadow-md">
  <div className='flex-col flex '>
        <div className='flex items-center  flex-col'>
          <div className='flex items-end'>
        <TbMessageQuestion className="w-[50px] h-[50px]  bg-blue-600 rounded-xl mt-2 justify-center" />
        <FaPencilAlt className="ml-2" />
        </div>
        <p className="font-bold mt-2 justify-center ">{getData?.getData?.questions[0]?.quizId?.title}</p>
        </div>
        <div className="flex items-center ml-5">
          <MdOutlineQuestionAnswer />
          <p className='pl-1 '> {getData?.getData?.questions?.length} Quesitons </p>
          </div>
          <div className='flex items-center ml-5 '>
          <IoLibraryOutline />
          <p className='pl-1'>{getData?.getData?.questions[0]?.quizId?.type}</p>
        </div>
        <div className='flex items-center ml-5' > 
          <UserOutlined />
          <p className='pl-2'>{getData?.getData?.questions[0]?.quizId?.author?.name}</p> 
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
  )
}

export default Title;