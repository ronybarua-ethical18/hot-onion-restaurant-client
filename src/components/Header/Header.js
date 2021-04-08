import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png'
const Header = (props) => {
    const loggedInUser = props.loggedInUser;
    return (
        <div className="bg-white">
           <div className="container">
                <Navbar collapseOnSelect expand="lg" fixed="top" className="container bg-white">
                    <Navbar.Brand to="#home"><img src={logo} id="brand-image" alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto d-flex align-items-center">
                            <Link><FontAwesomeIcon className="mr-3 text-danger" icon={faShoppingCart}></FontAwesomeIcon></Link>
                            <Link to="/home" className="nav-link">Home</Link>
                            <Link to="/admin" className="ml-3 mr-3 nav-link">Admin</Link>
                        </Nav>
                        {!loggedInUser.email && <Link to="/login"><Button id="sign-up-btn">SignUp</Button></Link>}
                        <span><b className="text-dark ml-2">{loggedInUser.displayName}</b></span>
                    </Navbar.Collapse>
                </Navbar>
           </div>
        </div>
    );
};

export default Header;