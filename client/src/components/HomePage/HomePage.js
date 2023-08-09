import React from "react";
import { Link } from 'react-router-dom';
import './HomePage.css';
import City from '../City/city';

const HomePage = () => {
  return (
    <div className="homepage-pq">
      <div className="content-container-pq">
        <h3>Welcome to ProQuest</h3>
        <City />
        <div>
          <Link to="/login-customer" className='ant-btn btn-customer'>SignUp/Login as a Customer</Link>
          <Link to="/login-professional" className='ant-btn btn-professional'>Login as a Professional</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;