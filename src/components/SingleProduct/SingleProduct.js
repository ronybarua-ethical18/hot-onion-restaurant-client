import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleProduct.css';
const SingleProduct = (props) => {
    const { imageURL, name, price, description } = props.product;
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
        <div className="container" id="product-gap">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <div className="pricing mb-3 d-flex justify-content-start">
                        <h3><b>${price}</b></h3>
                        <div className="product-quantity d-flex justify-content-center align-items-center ml-4 border">
                            <button id="minus" onClick={handleDecrease}><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
                            <input type="text" name="orderQuantity" id="orderAmount" class="text-center" value="1" />
                            <button id="plus" onClick={handleIncrease}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                        </div>
                    </div>
                    <Link to="/placeOrder"><Button variant="primary" id="book-table-btn"><FontAwesomeIcon className="mr-3" icon={faShoppingCart}></FontAwesomeIcon>Add to cart </Button></Link>
                </div>
                <div className="col-md-6">
                    <img src={imageURL} classsName="img-fluid" id="single-image" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;