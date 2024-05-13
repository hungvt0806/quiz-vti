import React, { useContext, useState } from 'react'
import { Link, unstable_HistoryRouter, useNavigate } from 'react-router-dom'
import authService from '../services/authService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppContext from '../contex/AppContext';


const LoginRegister = () => {

    const {dispatch} = useContext(AppContext);
    const [errorMessenge,setErrorMessage] = useState(null);
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
        //e.preventtDefault();
                
        const response = await authService.login(formData); 

        
        const {token, user} = response.data.data;
        console.log("response  la :",response.data.data);
        localStorage.setItem('token',token);
        localStorage.setItem('userId',user._id)
        dispatch({type:"CURRENT_USER",payload: {user}}); 
        toast.success("Wellcome");     
        navigate("/homepage");
      
      } catch (error) {
        toast.error(error.response.data.message)}
    }
    
       const signup = async() =>{
         try {
            console.log("Sign up function executed",formData);
            const response = await authService.register(formData);
          

        const {token, user} = response.data.data;
        console.log("response  la :",response.data.data);
        localStorage.setItem('token',token);
        localStorage.setItem('userId',user._id)
        dispatch({type:"CURRENT_USER",payload: {user}}); 
        toast.success("Wellcome");     
        navigate("/homepage");
             
         } catch (error) {  
          setErrorMessage(error.response.data.status)
        }
       };

  return (
    <div className="containerAuthor">
    <div className="form signup">
      {errorMessenge &&(
        <div className='error-message'>Error: {errorMessenge}</div>
      )}
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
      {state==="Sign Up" ? <p>Already a member? <span onClick={()=>{setState("Login")}}style={{fontWeight: 'bold',color: 'white',cursor: 'pointer'}}>Log in</span></p>
                        : <p> No account? <span onClick={()=>{setState("Sign Up")}}style={{fontWeight: 'bold',color: 'white',cursor: 'pointer'}}>Create an account</span></p>} 
      
    </div>
    </div>
  )
}

export default LoginRegister
