import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import "./LoginProfessional.css";
import logo from "../../proquest-logo-1.png";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginProfessional = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                navigate('/professional');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="loginProfessionalContainer">
            <section className='loginProfessionalSection'>
                <div className="loginProfessionalLeftData">
                    <h3 className='loginProfessionalTitle'>Sign In As Professional</h3>
                    <form onSubmit={signIn}>
                        <Form.Group className="loginProfessionalEmailGroup" controlId="formBasicEmail">
                            <Form.Control type="email" name='email' placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} className='loginProfessionalInputBox' />
                        </Form.Group>

                        <Form.Group className="loginProfessionalPasswordGroup" controlId="formBasicPassword">
                            <Form.Control type="password" name='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='loginProfessionalInputBox' />
                        </Form.Group>
                        <button className='loginProfessionalSubmitBtn' type="submit">Submit</button>
                    </form>
                </div>
                <div className="loginProfessionalRightData">
                    <img src={logo} style={{ maxWidth: 600 }} alt="" />
                </div>
            </section>
        </div>
    );
};

export default LoginProfessional;
