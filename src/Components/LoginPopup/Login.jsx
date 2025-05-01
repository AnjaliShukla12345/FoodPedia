import React, { useState } from 'react'
import './Login.css'
import { assets2 } from '../../assets/assets2'

const Login = ({setShowLogin}) => {
 
 
 
const[currentState, setCurrentState] = useState("Login")

 
 
    return (
    <>
    <div className='login-popup'>
<form action="" className='login-popup-container'>
    <div className="login-popup-title">
        <h2>{currentState}</h2>
<img  onClick={()=>setShowLogin(false)}  src={assets2.cross_icon} alt="" />

    </div>


    <div className="login-popup-inputs">

{currentState==="Login"?<></> :  <input type="text" placeholder='Username' required/>}

       
        <input type='email' placeholder='Your Email' required/>
        <input type="password" placeholder='Password' required />
    </div>

    <button>{currentState==="Sign Up"? "Create an account" : "Login"}</button>

    <div className="login-popup-condition">
<input type="checkbox" required />
<p>By Continuing , I agree to the terms of use & privacy policy.</p>

    </div>
{currentState==="Login"
 ? <p>Create a account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p> 
 :
<p>Already have an account ? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
}
    
</form>
    </div>
      
    </>
  )
}

export default Login
