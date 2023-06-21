import React from "react";
import { Link } from 'react-router-dom';
import '/Users/rahul/Desktop/cpsc455group/ProQuest/src/components/HomePage/HomePage.css';

const HomePage = () => {
  return (
    <div className="container mt-3 homepage">
      <section className='d-flex justify-content-between center'>
        <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
          <h3 className='title'>Welcome to ProQuest</h3>
          <div>
            <Link to="/login-customer" className='ant-btn btn-customer'>SignUp/Login as a Customer</Link>
            <Link to="/login-professional" className='ant-btn btn-professional'>Login as a Professional</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
