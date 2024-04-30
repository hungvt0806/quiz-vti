import {BrowserRouter as Router, RouterProvider,Route,Switch } from 'react-router-dom';
import './App.css';
import router from './routers'
import AppReducer from './reducers/AppReducer';
import { useReducer } from 'react';


function App() {
  const initialState = {user: null, post:[]};
  const [state,dispatch] = useReducer(AppReducer,initialState);

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
