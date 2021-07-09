import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Breakfast.css'
import { connect } from 'react-redux'
import { addToCart, loadCurrentItem } from '../../redux/Shopping/shopping-actions'
const Breakfast = ({ product, addToCart, loadCurrentItem }) => {
    const history = useHistory();
    const handleClick = (id) => {
        const url = `productDetails/${id}`;
        history.push(url);
    }
    return (
        <div className="h-100 pb-4">
            <Card className="shadow mb-4 p-3 border-0 h-100" id="card-radius">
                <Card.Img variant="top" className="center-block" src={product.imageURL} id="product-image" />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        <p>The most delicious food</p>
                    </Card.Text>
                    <div className="">
                        <Button
                            onClick={() => addToCart(product._id)}
                            className="w-100 bg-success" id="book-table-btn">Add to Cart</Button>
                    </div>
                </Card.Body>
                <div id="price-overlay">
                    <b>${product.price}</b>
                </div>
                <div id="product-overlay">
                    <FontAwesomeIcon onClick={() => 
                    {
                        handleClick(product._id)
                        loadCurrentItem(product)
                    }} icon={faEye} className="text-success icon"></FontAwesomeIcon>
                </div>
            </Card>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}
export default connect(null, mapDispatchToProps)(Breakfast);