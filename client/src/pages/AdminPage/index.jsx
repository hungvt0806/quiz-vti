import React from 'react';
import MyHeader from '../../components/MyHeader';
import MySidebar from '../../components/MySidebar';
import { Outlet } from 'react-router-dom';



const AdminPage = () => {
  return (
    
    <div className='w-full h-full flex '>
     <MySidebar/>
     <div className='w-full h-full'>
    <MyHeader/>
    <div className='w-full h-[calc(100vh-50px)] '>
    <Outlet/>
     </div>
     </div>
    </div>
  )
}

export default AdminPage

