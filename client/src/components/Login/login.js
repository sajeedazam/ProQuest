import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logo from "../../proquest-logo-1.png";
import './login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                navigate('/dashboard');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="login-homepage">
            <div className="login-logo-container">
                <img src={logo} alt="Logo" />
            </div>
            <div className="login-content-container">
                <h3 className='login-title'>Sign In As a Customer</h3>
                <form onSubmit={signIn}>
                    <Form.Group className="login-title1 mx-auto" controlId="formBasicEmail" style={{ marginBottom: '10px' }}>
                        <Form.Control type="email" name='email' placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} className='login-input-box' />
                    </Form.Group>

                    <Form.Group className="login-title1 no-border mx-auto" controlId="formBasicPassword" style={{ marginBottom: '10px' }}>
                        <Form.Control type="password" name='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='login-input-box' />
                    </Form.Group>
                    <button className={`login-ant-btn ${isHovered ? 'button-hovered' : 'button'}`} 
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            type="submit">
                        Submit
                    </button>
                </form>
                <Link to="/signUp" className='login-create-account-btn'>Create an account</Link>
            </div>
        </div>
    );
};

export default Login;
