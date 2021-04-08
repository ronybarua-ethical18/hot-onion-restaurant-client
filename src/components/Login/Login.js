import React from 'react';
import './Login.css';
import logo from './logo.png';
import { useContext } from 'react';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'react-bootstrap';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // firebase initialization 
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirect) => {
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }
    // google login
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var user = result.user;
                handleResponse(user, true);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                console.log(errorCode, errorMessage, email);
            });
    }
    return (
        <div className="row d-flex justify-content-center align-items-center no-gutters">
            <div className="col-md-4 col-md-offset-4">
                <div className="login-div">
                    <div className="logo text-center"><img src={logo} className="img-fluid" alt="" /></div>
                    <div className="title">Red Onion</div>
                    <div className="sub-title">Login</div>
                    <div className="fields">
                        <div className="username">
                            <input type="text" className="user-input" placeholder="user name" name="" id="userName" />
                        </div>
                        <div className="password">
                            <input type="password" className="pass-input" placeholder="password" name="" id="userPass" />
                        </div>
                    </div>
                    <button className="signin-button">Login</button>
                    <div className="link">
                        <a href="/" className="mr-2">Forgot Password? or</a>
                        <a href="/">Sign Up</a>
                    </div>
                    <div className="social-login d-flex justify-content-center">
                        <FontAwesomeIcon onClick={handleGoogleSignIn} icon={faGoogle} className="fa-2x text-danger"></FontAwesomeIcon>
                        <FontAwesomeIcon onClick={handleGoogleSignIn} icon={faFacebook} className="mr-3 ml-3 fa-2x text-danger"></FontAwesomeIcon>
                        <FontAwesomeIcon onClick={handleGoogleSignIn} icon={faGithub} className="fa-2x text-danger"></FontAwesomeIcon>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;