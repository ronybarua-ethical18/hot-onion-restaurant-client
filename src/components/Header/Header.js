import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Link as ScrollNav } from 'react-scroll';
import './Header.css';
import logo from './logo.png'
const Header = (props) => {
    const loggedInUser = props.loggedInUser;
    return (
        <div className="bg-white">
           <div className="container">
                <Navbar collapseOnSelect expand="lg" fixed="top" className="container bg-white">
                    <Navbar.Brand to="/home"><img src={logo} id="brand-image" alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto d-flex align-items-center">
                            <ScrollNav><FontAwesomeIcon className="mr-3 text-danger" icon={faShoppingCart}></FontAwesomeIcon></ScrollNav>
                            <Link to="/home" className="nav-link">Home</Link>
                            <ScrollNav smooth={true} spy={true} duration={1000} offset={-100} to="product" className="ml-2 mr-2 nav-link">Products</ScrollNav>
                            <ScrollNav smooth={true} spy={true} duration={1000} offset={-100} to="service" className="ml-2 mr-2 nav-link">Services</ScrollNav>
                            <ScrollNav smooth={true} spy={true} duration={1000} offset={-100} to="chef" className="ml-2 mr-2 nav-link">Chefs</ScrollNav>
                            <ScrollNav smooth={true} spy={true} duration={1000} offset={-100} to="reviews" className="ml-2 mr-2 nav-link">Reviews</ScrollNav>
                            <ScrollNav smooth={true} spy={true} duration={1000} offset={-100} to="contact" className="ml-2 mr-2 nav-link">Contact</ScrollNav>
                            <Link to="/admin" className="ml-2 mr-2 nav-link">Dashboard</Link>
                        </Nav>
                        {!loggedInUser.email && <Link to="/admin"><Button id="sign-up-btn">Login</Button></Link>}
                        <span><b className="text-dark ml-2">{loggedInUser.displayName}</b></span>
                    </Navbar.Collapse>
                </Navbar>
           </div>
        </div>
    );
};

export default Header;