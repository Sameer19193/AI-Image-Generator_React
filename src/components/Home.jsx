import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our App</h1>
      <p>This is the landing page of our application.</p>
      
      <div className="home-buttons">
        <Link to="/register" className="home-button">Register</Link>
        <Link to="/login" className="home-button">Login</Link>
      </div>
    </div>
  );
}

export default Home;
