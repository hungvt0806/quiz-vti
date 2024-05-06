import React, { useState } from 'react'
import { Link, unstable_HistoryRouter, useNavigate } from 'react-router-dom'
import authService from '../services/authService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginRegister = () => {
  
    const [state,setState] = useState("Login");
    const [formData, setFormData] = useState({
        name:"",
        password: "",
        confirmPassword:"",
        email:""
    });

    const navigate = useNavigate();
    
    const changeHandler = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    
    const login = async() =>{
      try {
        
                console.log("Login function executed",formData);
                const response = await authService.login(formData);
                  
                console.log("response  la :",response.data.data);
                localStorage.setItem('userDetail', JSON.stringify(response.data.data));
                localStorage.setItem('avatar',response.data.data.avatar);
                // localStorage.setItem('username', JSON.stringify(response.data.data.userName));
                // localStorage.setItem('auth-token', response.data.data.token);
                // localStorage.setItem('role', response.data.data.role);
                // localStorage.setItem('userId', response.data.data.userId);
                
                

                toast.success("Wellcome");     
                navigate("/admin");
                
        
              } catch (error) {
                toast.error(error.response.data.status)}
    }
        

    
       const signup = async() =>{
         try {
            console.log("Sign up function executed",formData);
            const response = await authService.register(formData);
          

            console.log("response  la :",response.data.data);
            localStorage.setItem('userDetail', JSON.stringify(response.data.data));
            localStorage.setItem('avatar',response.data.data.avatar);
            toast.success(response.status);  
            navigate("/admin");
             
         } catch (error) {
            toast.error(error.response.data.status)}
       }

  return (
    <div className="containerAuthor">
    <div className="form signup">
      <h2>{state}</h2>
      {state ==="Sign Up" ? <div className="inputBox">
      <input name='name'value={formData.name} onChange={changeHandler} type="text" required="required" />
         <i className="fa-regular fa-user"></i><span>username</span> 
      </div> :<></>}
      <div className="inputBox">
        <input name='email' value={formData.email} onChange={changeHandler} type="text" required="required" />
        <i className="fa-regular fa-envelope"></i><span>email address</span>
      </div>
      <div className="inputBox">
        <input name='password' value={formData.password} onChange={changeHandler} type="password" required="required" />
        <i className="fa-solid fa-lock"></i><span>password</span>
      </div>
      {state ==="Sign Up" ?<div className="inputBox">
        <input name='confirmPassword' value={formData.confirmPassword} onChange={changeHandler} type="password" required="required" />
        <i className="fa-solid fa-lock"></i><span>confirm password</span>
      </div> :<></>}
      <div className="inputBox">
        <input type="submit" value={state ==="Sign Up" ?"Create Account":"Login"} onClick={()=>{state ==="Sign Up" ?signup():login()}} />
      </div>
      {state==="Sign Up" ? <p>Already a member? <span onClick={()=>{setState("Login")}}>Log in</span></p>
                        : <p> No account? <span onClick={()=>{setState("Sign Up")}}>Create an account</span></p>} 
      
    </div>
    </div>
  )
}

export default LoginRegister
