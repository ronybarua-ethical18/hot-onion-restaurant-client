import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import  { useState, useEffect } from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Link as ScrollNav } from 'react-scroll';
import './Header.css';
import logo from './logo.png'
import { connect } from 'react-redux'
const Header = ({cart, loggedInUser}) => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() =>{
        let count = 0;
        cart.forEach(item => {
            count += item.quantity
        })
        setCartCount(count)
    }, [cart, cartCount])
    return (
        <div className="bg-white">
            <div className="container">
                <Navbar collapseOnSelect expand="lg" fixed="top" className="container bg-white">
                    <Navbar.Brand to="/home"><img src={logo} id="brand-image" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto d-flex align-items-center">
                            <Link to="/home" className="nav-link">Home</Link>
                            <ScrollNav smooth={true} spy={true} duration={1000} offset={-100} to="product" className="ml-2 mr-2 nav-link">Products</ScrollNav>
                            <ScrollNav smooth={true} spy={true} duration={1000} offset={-100} to="chef" className="ml-2 mr-2 nav-link">Chefs</ScrollNav>
                            <ScrollNav smooth={true} spy={true} duration={1000} offset={-100} to="reviews" className="ml-2 mr-2 nav-link">Reviews</ScrollNav>
                            <ScrollNav smooth={true} spy={true} duration={1000} offset={-100} to="contact" className="ml-2 mr-2 nav-link">Contact</ScrollNav>
                            <Link to="/admin" className="ml-2 mr-2 nav-link">Dashboard</Link>
                            <Link className="counter mr-4 text-dark" to="/cart">Cart <FontAwesomeIcon
                                className=" text-danger"
                                icon={faShoppingCart}>
                            </FontAwesomeIcon>
                                <label className="count">{cartCount}</label>
                            </Link>
                        </Nav>
                        {!loggedInUser.email && <Link to="/login"><Button id="sign-up-btn">Login</Button></Link>}
                        <span><b className="text-dark ml-3">{loggedInUser.displayName}</b></span>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};
const mapStateToProps = state =>{
    return{
        cart: state.shop.cart
    }
}
export default connect(mapStateToProps)(Header);