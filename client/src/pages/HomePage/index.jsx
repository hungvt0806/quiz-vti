import React from 'react'
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router';
import './style.css'


const HomePage = () => {
  return (
    
    <div className='w-full h-full'>
   <Navbar/>
   <div className='w-full h-[calc(100vh-50px)]'>
    <Outlet/>
    </div>
    </div>

  );
};

export default HomePage;