import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'styled-components';
import "./style.css"; // Đảm bảo đường dẫn và tên file CSS đúng
import Navbar from '../../components/Navbar';
import Register from '../../components/Register';

export default function RegisterPage() {
  return (
    <div className='w-full h-full'>
    <Navbar/>
    <div className='w-full h-[calc(100vh-50px)]'>
    <Register/>
     </div>
     </div>
  );
}
