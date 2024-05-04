import React from 'react'
import logo from '../assets/logo.png';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full bg-purple-900'>
      <div className='flex justify-between items-center h-[50px]'>
        <div className='px-2 h-[50px] cursor-pointer '>
        <Link to="/">
        <img src={logo} alt="logo"  className='w-[130px] h-[50px]'/>
        </Link>
        </div>
        <div className='flex items-center'>
        <Link to="/login">
        <Button type="primary" className='mr-4 bg-purple-600 w-[100px]' >
          Login
        </Button>
      </Link>
      
    </div>
      </div>
    </div>
  )
}

export default Navbar



