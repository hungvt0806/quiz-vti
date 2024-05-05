import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginRegister from './components/LoginRegister';
import AdminPage from './pages/AdminPage';
import MyLibrary from './components/MyLibrary';
import MyExplore from './components/MyExplore';
import Setting from './components/Setting';
import Report from './components/Report';
import QuizDetail from './components/QuizDetail';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage/>}>
          <Route path="/" element={<MyExplore/>} />
            <Route path="/login" element={<LoginRegister />} />
          </Route>
          <Route path="/admin" element={<AdminPage />}>
            <Route index element={<MyExplore />} />
            <Route path="createdByMe" element={<MyLibrary />} />
            <Route path="questions" element={<QuizDetail />} />
            <Route path="report" element={<Report />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);
