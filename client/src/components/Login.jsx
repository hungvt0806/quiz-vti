import { Link } from 'react-router-dom'
import React from 'react'
import { MailOutlined } from '@ant-design/icons'


const Login = () => {
  
  return (
    <div className="containerAuthor">
      <form  className="form signin">
        <h2>Sign in</h2>
       
        <div className="inputBox">
        <input type="text" required="required" />
        <i className="fa-regular fa-envelope"></i>
        <span>email</span>
      </div>
        <div className="inputBox">
          <input 
            type="password"
            name='password'
            id=''
            required="required"/>
          <i class="fa-solid fa-lock"></i><span>password</span>
        </div>
        <div className="inputBox">
          <input type="submit" value="Login" />
        </div>
        <p> No account? <Link to="/register">Create an account</Link></p>
      </form>
      
    </div>
  )
}

export default Login
