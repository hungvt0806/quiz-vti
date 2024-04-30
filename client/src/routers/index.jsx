import { Link, Outlet, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import MyLibraryPage from "../pages/MyLibraryPage";
import ReportPage from "../pages/ReportPage";


const router = [

    
      {
        path: "/",
        page: HomePage 
      },
      {
        path: "/login",
        page: LoginPage
      },
      {
        path: "/register",
        page: RegisterPage 
      },
      {
        path: "/admin",
        page: AdminPage
      },
      {
        path: "/admin/my-library/createdByMe",
        page: MyLibraryPage
      },
      {
        path: "/admin/report",
        page: ReportPage
      },
      
    
   
  ];
  export default router;