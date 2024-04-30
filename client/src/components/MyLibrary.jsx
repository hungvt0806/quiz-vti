import React from 'react'
import { TbMessageQuestion } from "react-icons/tb";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { IoLibraryOutline } from "react-icons/io5";

export default function MyLibrary() {
  return (
    <div className='h-full w-full bg-gray-200 flex items-center justify-center'>
       <div className="flex justify-end mt-2">
    <div className="pl-10 bg-gray-200 w-[1000px] h-[550px]">
        <h1 className="mx-5 my-5 text-2xl font-bold">My Library</h1>
        <div className="grid grid-rows-4 gap-1 ">
          <div className="w-[800px] h-[100px] bg-white flex relative ">
            <TbMessageQuestion className="w-[100px] h-[100px] bg-blue-600" />
            <div className="ml-5 mt-1">
              <button className="rounded-lg bg-gray-200 w-[45px]">Quiz</button>
              <p className="font-bold">BUNPOU_N2_07_2022</p>
              <div className="flex items-center">
                <MdOutlineQuestionAnswer />
                <p>10 Questions</p>
              </div>
              <div className='flex items-center' > 
                <IoLibraryOutline/>
                <p>Japanese</p> 
                <button className="bg-violet-700 w-[80px] h-15px] absolute right-1 bottom-1 rounded-md text-white mr-2 ">Play</button>
              </div>
            </div>
          </div>

          <div className="w-[800px] h-[100px] bg-white flex relative ">
            <TbMessageQuestion className="w-[100px] h-[100px] bg-violet-600" />
            <div className="ml-5 mt-1">
              <button className="rounded-lg bg-gray-200 w-[45px]">Quiz</button>
              <p className="font-bold">BUNPOU_N2_07_2022</p>
              <div className="flex items-center">
                <MdOutlineQuestionAnswer />
                <p>10 Questions</p>
              </div> 
              <div className="flex items-center">
                <IoLibraryOutline/>
                <p>Japanese</p>
                <button className="bg-violet-700 w-[80px] h-15px] absolute right-1 bottom-1 rounded-md text-white mr-2 ">Play</button>
              </div>
            </div> 
          </div>

          <div className="w-[800px] h-[100px] bg-white flex relative">
            <TbMessageQuestion className="w-[100px] h-[100px] bg-pink-600" />
            <div className="ml-5 mt-1">
              <button className="rounded-lg bg-gray-200 w-[45px]">Quiz</button>
              <p className="font-bold">BUNPOU_N2_07_2022</p>
              <div className="flex items-center">
                <MdOutlineQuestionAnswer />
                <p>10 Questions</p>
              </div> 
              <div className="flex items-center">
                <IoLibraryOutline/>
                <p>Japanese</p>
                <button className="bg-violet-700 w-[80px] h-15px] absolute right-1 bottom-1 rounded-md text-white mr-2 ">Play</button>
              </div>
            </div> 
          </div>


          <div className="w-[800px] h-[100px] bg-white  flex relative">   
            <TbMessageQuestion className="w-[100px] h-[100px]  bg-fuchsia-600" />
            <div className="ml-5 mt-1">
              <button className="rounded-lg bg-gray-200 w-[45px]">Quiz</button>
              <p className="font-bold">BUNPOU_N2_07_2022</p>
              <div className="flex items-center">
                <MdOutlineQuestionAnswer />
                <p>10 Questions</p>
              </div> 
              <div className="flex items-center">
                <IoLibraryOutline/>
                <p>Japanese</p>
                <button className="bg-violet-700 w-[80px] h-15px] absolute right-1 bottom-1 rounded-md text-white mr-2 ">Play</button>
              </div>
            </div>   
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
