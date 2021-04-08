import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PlaceOrder.css';
import productImage from './banner.png';
const PlaceOrder = () => {
    const handleDecrease = () => {
        const QuantityInput = document.getElementById('orderAmount');
        const ProductCount = parseInt(QuantityInput.value);
        if (ProductCount !== 0) {
            const ProductNewCount = ProductCount - 1;
            QuantityInput.value = ProductNewCount;
        }
    }
    const handleIncrease = () => {
        const QuantityInput = document.getElementById('orderAmount');
        const ProductCount = parseInt(QuantityInput.value);
        const ProductNewCount = ProductCount + 1;
        QuantityInput.value = ProductNewCount;
    }
    return (
        <div className="container" id="placeOrder">
            <div className="row">
                <div className="col-md-7">
                    <h2>Delivery Details</h2>
                    <hr />
                    <div className="user-info mb-4 ">
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Delivery Address" />
                            </Form.Group>
                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Delivery Address 2" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control placeholder="Phone Number" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>Chandgaon</option>
                                        <option>Agrabad</option>
                                        <option>Shagorika</option>
                                        <option>New Market</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className="col-md-5 shadow p-3">
                    <div className="orderDetails ">
                        <div className="destination">
                            <p>From <b>Gulshan Plaza Restaura GPR</b></p>
                            <p>To <b>Chandgaon Residential Area</b></p>
                            <p>Arriving in <b>20-30 min</b></p>
                        </div>
                        <div className="orderReview d-flex justify-content-between flex-wrap align-items-center p-3 bg-light">
                            <div className="product-photo">
                                <img src={productImage} id="productImg" className="img-fluid" alt=""/>
                            </div>
                            <div className="product-info">
                                <p>Chicken Salad</p>
                                <p><b>$55</b></p>
                                <p>Delivery free</p>
                            </div>
                            <div className="orderedProduct d-flex justify-content-center align-items-center border">
                                <button id="minus" onClick={handleDecrease}><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
                                <input type="text" name="orderQuantity" id="orderAmount" class="text-center" value="1" />
                                <button id="plus" onClick={handleIncrease}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                            </div>
                        </div>
                        <div className="placeOrder pt-4">
                            <div className="subtotal d-flex justify-content-between">
                                <p>Subtototal:</p>
                                <b>$320</b>
                            </div>
                            <div className="tax d-flex justify-content-between">
                                <p>Tax: </p>
                                <b>$10</b>
                            </div>
                            <div className="deliveryFee d-flex justify-content-between">
                                <p>Delivery Fee:</p>
                                <b>$2</b>
                            </div>
                            <div className="grandTotal d-flex justify-content-between">
                                <p>Grand Total:</p>
                                <b>$332</b>
                            </div>
                            <Button variant="primary">Place Order</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;