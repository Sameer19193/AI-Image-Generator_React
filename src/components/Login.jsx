import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Design/Login.css";

function Login() {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", { 
        email,
        password
      });

      if (response.data === "success") {
        navigate('/home');
      } else {
        setError("Invalid email or password"); 
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later."); 
    }
  }

  return (
    <div className="login-body"> {/* Change this line */}
      <div className="login-container">
        <div className="login-info">
          <div className="logo"></div>
          <h1>
              Welcome Back! 
              <br></br>
              CinemArt gets you what you're looking for</h1>
              <br></br>
        </div>
        <div className="login-form">    
          <h2>Login</h2>
          <form onSubmit={submit}>
            <div className="login-input-group">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
            <div className="login-input-group">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="login-button" />
          </form>
          {error && <p>{error}</p>}
          <br />
          <p>OR</p>
          <br />
          
          <Link to="/signup" className="auth-button">SignUp</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
