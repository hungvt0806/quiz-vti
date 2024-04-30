import React from 'react';
import MyHeader from '../../components/MyHeader';
import MySidebar from '../../components/MySidebar';
import MyExplore from '../../components/MyExplore';
import MyLibrary from '../../components/MyLibrary'
import Question from '../../components/Question';





const AdminPage = () => {
  return (
    <div className='w-full h-full flex'>
     <MySidebar/>
     <div className='w-full h-full'>
    <MyHeader/>
    <div className='w-full h-[calc(100vh-50px)]'>
     <MyLibrary/>
     </div>
     </div>
    </div>
  )
}

export default AdminPage

