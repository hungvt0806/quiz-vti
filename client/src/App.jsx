import React from 'react';
import './App.css';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
    <Outlet/>
    
    </>
        
  );
}

export default App;
