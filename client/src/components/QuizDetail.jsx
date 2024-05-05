import React from 'react';
import Title from './Title';
import Ranking from './Ranking';
import Question from './Question';
import '../pages/AdminPage/QuestionDetail.css';
import { useState } from 'react';

const QuizDetail = () => {

    const [questionData,setQuestionData] = useState();

    const handleQuestionData = (data) => {
        setQuestionData(data);
        console.log("setQuestionData  la :",data);
      };

  return (
        <div className="bg-gray-200 h-screen flex  ">
            <nav className="bg-gray-200 w-80 h-screen flex flex-col gap-1 border-r border-slate-100 ">
            <div className= "flex items-center justify-center flex-col gap-4 border-b border-emerald-slate-50 py-1 px-1">
                <Title getData= {questionData}/>
            </div>
            <div className=" flex items-center h-screen justify-center flex-col gap-4 border-b border-emerald-slate-50 py-1 px-1 mb-10">
                <Ranking/>
            </div>

            </nav>
            <div className="p-4 bg-fuchsia-200 w-full h-full py-1 px-2 overflow-auto flex-col " id="journal-scroll">
                
                <Question sendData={handleQuestionData}/>
            </div>
        </div>
        

  )
}

export default QuizDetail
