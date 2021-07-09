import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleProduct.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Shopping/shopping-actions';
const SingleProduct = ({ currentItem, addToCart }) => {
    console.log(currentItem)
    return (
        <div className="container" id="product-gap">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h2>{currentItem.name}</h2>
                    <p>{currentItem.description}</p>
                    <h3 className="mb-4"><b>${currentItem.price}</b></h3>
                    <Button
                        variant="primary"
                        onClick={() => addToCart(currentItem._id)}
                        id="book-table-btn">
                        <FontAwesomeIcon
                            className="mr-3"
                            icon={faShoppingCart}></FontAwesomeIcon>Add to cart </Button>
                </div>
                <div className="col-md-6">
                    <img src={currentItem.imageURL} className="img-fluid" id="single-image" alt="" />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        currentItem: state.shop.currentItem,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);