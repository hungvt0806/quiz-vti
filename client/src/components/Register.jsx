import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  
  return (
    <div className="containerAuthor">
    <div className="form signup">
      <h2>Sign up</h2>
      <div className="inputBox">
        <input type="text" required="required" />
        <i className="fa-regular fa-user"></i><span>username</span>
      </div>
      <div className="inputBox">
        <input type="text" required="required" />
        <i className="fa-regular fa-envelope"></i><span>email address</span>
      </div>
      <div className="inputBox">
        <input type="password" required="required" />
        <i className="fa-solid fa-lock"></i><span>create password</span>
      </div>
      <div className="inputBox">
        <input type="password" required="required" />
        <i className="fa-solid fa-lock"></i><span>confirm password</span>
      </div>
      <div className="inputBox">
        <input type="submit" value="Create Account" />
      </div>
      <p>Already a member? <Link to="/login">Log in</Link></p> 
    </div>
    </div>
  )
}

export default Register
