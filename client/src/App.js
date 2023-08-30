import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Navbar'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Card  from './components/Card'
import Write from './components/Write'
function App() {
  return (
    <Router>
    <Nav/>
      <Routes>
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/card" element={<Card />} />
        <Route path="/write" element={<Write />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
