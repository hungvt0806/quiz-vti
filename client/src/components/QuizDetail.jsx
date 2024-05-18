import React from 'react';
import Title from './Title';
import Ranking from './Ranking';
import Question from './Question';
import '../pages/AdminPage/QuestionDetail.css';
import { useState } from 'react';
import Comment from './Comment';

const QuizDetail = () => {

    
    

  return (
        <div className="bg-gray-200 h-screen flex  ">
            <nav className="bg-gray-200 w-80 h-screen flex flex-col gap-1 border-r border-slate-100 ">
            <div className= "flex items-center justify-center flex-col gap-4 border-b border-emerald-slate-50 py-1 px-1 bg-gray-200">
                <Title/>
            </div>
            <div className=" flex items-center h-screen justify-center flex-col gap-1 border-b border-emerald-slate-50 py-1 px-1 mb-10">
                <Ranking/>
            </div>

            </nav>
            <div className="p-1 bg-fuchsia-200 w-full py-1 px-2  flex-col overflow-y-auto overflow-x-hidden h-6/6" >
                
                <Question />
                <Comment/>
            </div>
        </div>
        

  )
}

export default QuizDetail
