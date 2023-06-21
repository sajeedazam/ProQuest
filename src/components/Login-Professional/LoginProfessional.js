import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./LoginProfessional.css";
import logo from "../../urbancompanylogo.jpg";
import {useState} from "react"
import {auth} from "/Users/rahul/Desktop/cpsc455group/ProQuest/src/components/firebase.js"
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import SignUp from "../SignUp/signUp";
import { useNavigate } from "react-router-dom";

// export default function Login () {
const LoginProfessional = () => {

    const navigate = useNavigate();
    const[email, setEmail] = useState("");
    const [password, setPassword] = useState("");

 
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
            navigate('/professional');;
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
                        <h3 className='title'>Sign In As a Professional</h3>
                        <form onSubmit ={signIn}>

                            <Form.Group className="title1 mx-auto col-lg-6" controlId="formBasicEmail" style={{ marginBottom: '10px' }}>

                                <Form.Control type="email" name='email' placeholder="Enter email"  value={email} onChange={(e) => setEmail(e.target.value)} style={{ border: 'none' }} className='input-box'/>
                            </Form.Group>

                            <Form.Group className="title1 no-border mx-auto col-lg-6" controlId="formBasicPassword" style={{ marginBottom: '10px' }}>

                                <Form.Control type="password" name='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ border: 'none' }} className='input-box'/>
                            </Form.Group>
                            <button className='ant-btn' style={{ background: "rgb(67, 185, 127)", marginBottom: '5px' }} type="submit">
                                Submit
                            </button>
                        </form>
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

export default LoginProfessional;
