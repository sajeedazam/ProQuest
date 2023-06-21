import React from 'react';
import './App.css';
import Login from './components/Login/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './components/Categories/categories';
import About from './components/About/about';
import City from './components/City/city';
import SignupPage from './components/SignUp/signUp';
import ProfessionalHomescreen from './components/pHomepage/phomepage.js'
import AuthDetails from './auth/AuthDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashbord/Dashbord';
import HomePage from './components/HomePage/HomePage';
import LoginProfessional from './components/LoginProfessional/LoginProfessional';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/login-customer" element={<Login />} />
          <Route path="/login-professional" element={<LoginProfessional />} />
          <Route path="/signUp" element={<SignupPage />} />
          <Route path="/auth" element={<AuthDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/professional" element={<ProfessionalHomescreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

