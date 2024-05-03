import React, { useState } from 'react';
import './loginpage.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginPage = () => {
  const [action, setAction] = useState('login'); 

  const signup = () => {
    setAction('signup'); 
  };

  const login = () => {
    setAction('login'); // Set action to 'login' when login link is clicked
  };

  return (
    <div className="wrapper">
      {action === 'login' && (
        <div className="form-box login">
          <form>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" onClick={signup}>Signup</a>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      )}
      {action === 'signup' && ( 
        <div className="form-box register">
          <form>
            <h1>Signup</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <FaEnvelope />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                I agree to the terms and conditions
              </label>
            </div>
            <button type="submit">Signup</button>
            <div className="register">
              <p>Already have an account? <a href="#" onClick={login}>Login</a></p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
