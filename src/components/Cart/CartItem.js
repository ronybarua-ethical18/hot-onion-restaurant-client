import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './CartItem.css'
import { connect } from 'react-redux'
import { adjustQuantity, removeFromCart } from '../../redux/Shopping/shopping-actions';
const CartItem = ({ itemData, removeFromCart, adjustQuantity }) => {

    const [input, setInput] = useState(itemData.quantity)
    const onChangeHandler = (e) => {
        setInput(e.target.value)
        adjustQuantity(itemData._id, e.target.value)
    }
    return (
        <div className="container-fluid mt-4 ">
            <div className="row">
                <div className="col-md-12">
                    <div className="bg-white p-4 shadow cart-item mb-4 d-flex">
                        <img className="item-image mr-5" src={itemData.imageURL} alt={itemData.name} />
                        <div className="d-flex justify-content-between align-items-center flex-wrap w-100">
                            <div className="text-left">
                                <strong>{itemData.name}</strong><br />
                                <strong>${itemData.price}</strong>
                                <p className="mt-3 text-success">{itemData.productType}</p>
                            </div>

                            <div className="product-quantity py-2 shadow mb-2">
                                <input
                                    min="1"
                                    onChange={onChangeHandler}
                                    type="number"
                                    name="quantity" id="quantity" class="text-center" value={input} />
                            </div>
                            <div>
                                <strong><label className="total-price">${itemData.price * itemData.quantity}</label></strong>
                            </div>
                            <div className="delete-item">
                                <FontAwesomeIcon
                                    onClick={() => removeFromCart(itemData._id)}
                                    className="fa-2x delete-icon text-danger" icon={faTrashAlt}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value))
    }
}
export default connect(null, mapDispatchToProps)(CartItem);