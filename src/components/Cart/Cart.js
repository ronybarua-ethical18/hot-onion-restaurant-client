import React, { useEffect, useState } from 'react';
import './Cart.css'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Cart = ({ cart }) => {
    const [totalItems, setTotalItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [tax, setTax] = useState(0)
    const [grandTotal, setGrandTotal] = useState(0)
    const [serviceCharge, setServiceCharge] = useState(0)

    useEffect(() => {
        let items = 0;
        let price = 0;
        let tax = 0;
        let serviceCharge = 0;
        let grandTotal = 0;
        cart.forEach(item => {
            items += item.quantity;
            price += item.quantity * item.price;
            tax = Math.round(price * 0.1);
            serviceCharge = Math.round(price * 0.1);
            grandTotal = price + Math.round(tax) + Math.round(serviceCharge);

            setTotalPrice(price)
            setTotalItems(items)
            setTax(tax)
            setGrandTotal(grandTotal)
            setServiceCharge(serviceCharge)
        })

    }, [cart, totalItems, totalPrice, tax, serviceCharge, grandTotal, setTotalItems, setTotalPrice, setTax, setGrandTotal, setServiceCharge])
    return (
        <div className="w-100">
            <div className="row m-0">
                <div className="col-md-8 p-0 products-info" >

                    {cart.length ? <div >
                        {
                            cart.map(item => <CartItem key={item._id} itemData={item} />)
                        }
                    </div> : <div className="text-center mt-5 h-100"><h2>Oops! you didn't add any product yet</h2></div>}
                </div>
                <div className="col-md-4 bg-danger p-4" id="cart-summary">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="text-center"><strong>Cart Summary</strong></h2>
                        <Link to="/home" className="text-white"><FontAwesomeIcon icon={faHome} className="fa-2x">Go Home</FontAwesomeIcon></Link>
                    </div>
                    <hr />
                    <div className="">
                        <div className="totalItems d-flex justify-content-between">
                            <strong>Total Items</strong>
                            <strong>{cart.length}</strong>
                        </div>
                        <hr />
                        <div className="Quantity d-flex justify-content-between">
                            <strong>Quantity</strong>
                            <strong>{totalItems}</strong>
                        </div>
                        <hr />
                        <div className="Quantity d-flex justify-content-between">
                            <strong>Price</strong>
                            <strong>${totalPrice}</strong>
                        </div>
                        <hr />
                        <div className="Quantity d-flex justify-content-between">
                            <strong>Tax</strong>
                            <strong>${tax}</strong>
                        </div>
                        <hr />
                        <div className="Quantity d-flex justify-content-between">
                            <strong>Service Charge</strong>
                            <strong>${serviceCharge}</strong>
                        </div>
                        <hr />
                        <div className="Quantity d-flex justify-content-between">
                            <strong>Grand Total</strong>
                            <strong>${grandTotal}</strong>
                        </div>
                        <hr />
                        <div className="proceed mt-5 d-flex justify-content-center">
                            <button className="shadow" id="proceed-btn">Proceed to check out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}
export default connect(mapStateToProps)(Cart);