import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../Design/Signup.css"; // Import the CSS file used for signup page

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function submit(e) {
        e.preventDefault();
        
        // Form validation
        if (!email.trim() || !password.trim()) {
            setError("Please enter both email and password.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/signup", {
                email,
                password
            });

            if (response.data === "exist") {
                setError("User already exists.");
            } else if (response.data === "notexist") {
                navigate('/home');
            }
        } catch (error) {
            console.error("Error:", error);
            setError("An error occurred. Please try again later.");
        }
    }

    return (
        <div className="signup-body">
            <div className="signup-container">
                <div className="signup-info">
                    <h1>CinemArt gets you what you're looking for</h1>
                    <br></br>
                    <br></br>
                </div>
                <div className="signup-form">    
                    <h2>Sign Up</h2>
                    <form onSubmit={submit}>
                        <div className="signup-input-group">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        </div>
                        <div className="signup-input-group">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </div>
                        <input type="submit" value="SignUp" className="signup-button" />
                    </form>
                    {error && <p>{error}</p>}
                    <br />
                    <p>OR</p>
                    <br />
                    <Link to="/" className="auth-button">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
