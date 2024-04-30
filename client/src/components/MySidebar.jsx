import { Link } from 'react-router-dom';
import React from 'react'
import Jack from '../assets/Jack.png';
import logo from '../assets/logo.png';
import { TinyColor } from '@ctrl/tinycolor';
import { Button, ConfigProvider, Space } from 'antd';
import { BankOutlined, FormOutlined, LogoutOutlined, MonitorOutlined, PlusCircleOutlined } from '@ant-design/icons';

const colors2 = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];

const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

const MySidebar = () => {
  return (
    <div className='h-screen w-[300px] bg-gray-800'>
      <div className='bg-white h-[50px]'>
        <div className='text-xl font-bold text-center flex items-center justify-center text-red h-full'>
        <img src={logo} alt="logo"  className='w-[130px]'/>
        </div>
      </div>
      <div className='flex flex-col justify-between h-[calc(100vh-3rem)] bg-white'>
        <div className='menu-man text-left whitespace-nowrap'>
            <div className='profile flex justify-center items-center text-center p-5'>
                <div className='text-center'>
                <img src={Jack} alt="Jack" className="rounded-full w-24 h-24" />

                    <h5 className='text-xl font-medium leading-tight mb-2'>hungvu</h5>
                    <p className='text-gray-600'>Admin</p>
                </div>
            </div>
            <div className='flex justify-center py-2'>

            <ConfigProvider
            theme={{
             components: {
                Button: {
                colorPrimary: `linear-gradient(90deg,  ${colors2.join(', ')})`,
                colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(colors2).join(', ')})`,
                colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(colors2).join(', ')})`,
                lineWidth: 0,
                  },
                },
              }}
            >
            <Link to="/" className="px-2 flex space-x-2">        
              <Button type="primary" size="large" className='flex items-center justify-center py-2 w-[200px] h-[50px]'>
              <PlusCircleOutlined />
               CREAT
              </Button>
              </Link>
            </ConfigProvider>
                    </div>

           

            <div className="py-3 w-full cursor-pointer text-gray-600 hover:text-white hover:bg-gray-300">
                <Link to="/" className="px-7 flex space-x-2">
                <MonitorOutlined />
                <span>Explore</span>
                </Link>
            </div>

            <div className="py-3  cursor-pointer text-gray-600 hover:text-white hover:bg-gray-300">
                <Link to="/" className="px-7 flex space-x-2">
                <BankOutlined />
                <span>My Library</span>
                </Link>
            </div>

            <div className="py-3 cursor-pointer text-gray-600 hover:text-white hover:bg-gray-300">
                <Link to="/" className="px-7 flex space-x-2">
                <FormOutlined />
                <span>Report</span>
                </Link>
            </div>

            <div className="py-3  cursor-pointer text-gray-600 hover:text-white hover:bg-gray-300" >
                <Link to="/" className="px-7 flex space-x-2">
                <LogoutOutlined />
                <span>Logout</span>
                </Link>
            </div>

        </div>
      </div>
    </div>
  )
}

export default MySidebar