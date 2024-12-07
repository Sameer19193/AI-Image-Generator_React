// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Login />} /> 
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
