import React from 'react';
import "./style.css";
import Navbar from '../../components/Navbar';
import Login from '../../components/Login';


export default function LoginPage() {
  return (
    <div className='w-full h-full'>
    <Navbar/>
    <div className='w-full h-[calc(100vh-50px)]'>
    <Login/>
     </div>
     </div>
  );
}
