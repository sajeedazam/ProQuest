import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logo from "../../proquest-logo-1.jpg";
import './login.css';  // Import the CSS file here

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
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='title'>Sign In As a Customer</h3>
                        <form onSubmit={signIn}>
                            <Form.Group className="title1 mx-auto col-lg-6" controlId="formBasicEmail" style={{ marginBottom: '10px' }}>
                                <Form.Control type="email" name='email' placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ border: 'none' }} className='input-box' />
                            </Form.Group>

                            <Form.Group className="title1 no-border mx-auto col-lg-6" controlId="formBasicPassword" style={{ marginBottom: '10px' }}>
                                <Form.Control type="password" name='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ border: 'none' }} className='input-box' />
                            </Form.Group>
                            <button className={`ant-btn ${isHovered ? 'button-hovered' : 'button'}`} 
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    type="submit">
                                Submit
                            </button>
                        </form>
                        <Link to="/signUp" className='mt-3'>Create an account</Link>
                    </div>
                    <div className="right_data mt-5" style={{ width: "100%" }}>
                        <div className="sign_img mt-5">
                            <img src={logo} style={{ maxWidth: 400 }} alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Login;
