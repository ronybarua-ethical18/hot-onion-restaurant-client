import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import "firebase/auth";
import {
    createUserWithEmailAndPassword,
    handleGoogleSignIn,
    initializeFirebase,
    signInWithEmailAndPassword
} from './LoginManager';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import loginPhoto from '../../images/chefs.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
const Login = () => {
    initializeFirebase();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        error: '',
        password: '',
        success: false
    });
    console.log(user)
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirect) => {
        setLoggedInUser(res);
        setUser(res);

        if (redirect) {
            history.replace(from);
        }
    }
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }
    const handleBlur = (event) => {
        let isFormValid = true;
        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
            if (!isFormValid) {
                setEmailError('Enter valid email')
            }
            else {
                setEmailError('');
            }
        }
        if (event.target.name === 'password') {
            const passwordLength = event.target.value.length > 6;
            const hasNumber = /\d{1}/.test(event.target.value);
            isFormValid = passwordLength && hasNumber;
            if (!isFormValid) {
                setPasswordError('Password should have number and letters and length must be greater than 6');
            }
            else {
                setPasswordError('');
            }
            console.log(isFormValid);
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (event) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true)
                    setUser(res);
                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true)
                    console.log(res.error)
                })
        }
        event.preventDefault();
    }
    return (
        <div className="container d-flex align-items-center" id="loginPage">
            <div className="row w-100">
                <div className="col-md-6">
                    <img src={loginPhoto} className="img-fluid" alt="" />
                </div>
                <div id="headerMain" className="col-md-6">
                    <Form className="w-100 shadow p-4" onSubmit={handleSubmit}>
                        {newUser && <Form.Group controlId="formBasicName">
                            <Form.Label><span className="">Name</span></Form.Label>
                            <Form.Control name="name" onBlur={handleBlur} type="text" placeholder="Name" />
                        </Form.Group>}
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><span className="">Email address</span></Form.Label>
                            <Form.Control onChange={handleBlur} name="email" type="email" placeholder="Enter email" />
                        </Form.Group>
                        <p className="text-danger">{emailError}</p>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label><span className="">Password</span></Form.Label>
                            <Form.Control onChange={handleBlur} name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <p className="text-danger">{passwordError}</p>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check onChange={() => setNewUser(!newUser)} name="newUser" type="checkbox" label="Sign Up if you are new here" />
                        </Form.Group>
                        <p style={{ color: 'red' }}>{loggedInUser.error}</p>
                        <button id="book-table-btn">
                        {newUser ? 'Sign Up' : 'Sign In'}
                        </button>
                        <Button id="book-table-btn" onClick={googleSignIn}>
                            <FontAwesomeIcon icon={faGoogle} className="mr-2"></FontAwesomeIcon>Login with Google
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;
   