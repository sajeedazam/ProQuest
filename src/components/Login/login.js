import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./login.css";
import logo from "../../urbancompanylogo.jpg";

export default function Login () {
    return (
    <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='title'>Sign In</h3>
                        <Form>

                            <Form.Group className="title1 mx-auto col-lg-6" controlId="formBasicEmail" style={{ marginBottom: '10px' }}>

                                <Form.Control type="email" name='email' placeholder="Enter email" style={{ border: 'none' }} className='input-box'/>
                            </Form.Group>

                            <Form.Group className="title1 no-border mx-auto col-lg-6" controlId="formBasicPassword" style={{ marginBottom: '10px' }}>

                                <Form.Control type="password" name='password' placeholder="Password" style={{ border: 'none' }} className='input-box'/>
                            </Form.Group>
                            <button className='ant-btn' style={{ background: "rgb(67, 185, 127)", marginBottom: '5px' }} type="button">
                                Submit
                            </button>
                        </Form>
                        <a href="" className='mt-3'>Create an account</a>
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