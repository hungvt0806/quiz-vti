import { Link, Outlet, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import MyLibraryPage from "../pages/MyLibraryPage";
import ReportPage from "../pages/ReportPage";


const router = createBrowserRouter([

    
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/admin",
        element: <AdminPage/>,
      },
      {
        path: "/admin/my-library/createdByMe",
        element: <MyLibraryPage/>,
      },
      {
        path: "/admin/report",
        element: <ReportPage/>,
      },
      
    
   
  ]);
  export default router;