import React, { useEffect, useReducer } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import LoginRegisterPage from './pages/LoginRegisterPage';
import MyLibraryPage from './pages/MyLibraryPage';
import QuizDetailsPage from './pages/QuizDetailsPage';
import AppReducer from './reducers/AppReducer';
import AppContext from './contex/AppContext';

function App() {

  const initialState = {user: null, quizzes:[]};
  const [state,dispatch] = useReducer (AppReducer,initialState);
  

  

  return (

    <BrowserRouter>
    <AppContext.Provider value={{state,dispatch}}>
      <Routes>
            <Route path="/" element={<LoginRegisterPage />} />
            <Route path="/homepage" element={<HomePage />}/>
            <Route path="/createdByMe/:createdBy" element={<MyLibraryPage />} />
            <Route path="/quizDetails/:quizId" element={<QuizDetailsPage />} />
            <Route path="/report" element={<AdminPage />} />
      </Routes>
      </AppContext.Provider>
      <ToastContainer/>
    </BrowserRouter>
        
  );
}

export default App;