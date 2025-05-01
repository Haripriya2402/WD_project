import React,{useState} from 'react'
import { assets } from './frontend_assets/assets';
import "./SignupPage.css";
export const SignupPage = ({SetshowLogin}) => {

  const [currState,setcurrState]=useState("Sign Up"); 
  return (
    <>
    <div className="login-popup">
        <form className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>SetshowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-popup-input">
          {currState==="Login"
            ?<>
            <input type="email" placeholder='Your Email' required />
            <input type="Password" placeholder='Password' required />
            </>
            :<>
              <input type="text" placeholder='Your Name' required />
              <input type="email" placeholder='Your Email' required />
              <input type="Password" placeholder='Password' required />
            </>
          }
          </div>
          <button>{currState ==="Sign Up"?"Create Account":"Login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & pricacy policy.</p>
          </div>
          {currState==="Login"?
            <p>Create a new Account? <span onClick={()=>setcurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an Account? <span onClick={()=>setcurrState("Login")}>Login here</span></p>
          }    
        </form>
    </div>
    </>
  )
}
