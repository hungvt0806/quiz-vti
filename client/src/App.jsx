import {BrowserRouter as Router, RouterProvider,Route,Switch, Routes } from 'react-router-dom';
import './App.css';
import router from './routers'



function App() {
 


  return (
    <>
    <Router>
      <Routes>
        {
          router.map((route)=>{
            const Page = route.page
            return (
              <Route key={route.path} path={route.path} element = {<Page/>}/>
            )
          })
        }
            
      </Routes>
    </Router>
    </>
  );
}

export default App;
