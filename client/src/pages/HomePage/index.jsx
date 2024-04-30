import React from 'react'
import Navbar from '../../components/Navbar';
import MyExplore from '../../components/MyExplore';

const HomePage = () => {
  return (
    
    <div className='w-full h-full'>
   <Navbar/>
   <div className='w-full h-[calc(100vh-50px)]'>
    <MyExplore/>
    </div>
    </div>

  );
};

export default HomePage;