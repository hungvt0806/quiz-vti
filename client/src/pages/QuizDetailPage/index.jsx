import React from 'react';
import MyHeader from '../../components/MyHeader';
import MySidebar from '../../components/MySidebar';
import Question from '../../components/Question';

const QuizDetailPage = () => {
  return (
    <div className='w-full h-full flex'>
     <MySidebar/>
     <div className='w-full h-full'>
    <MyHeader/>
    <div className='w-full h-[calc(100vh-50px)]'>
     <Question/>
     </div>
     </div>
    </div>
  )
}

export default QuizDetailPage
