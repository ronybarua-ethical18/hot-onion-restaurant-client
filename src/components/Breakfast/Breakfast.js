import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Breakfast.css'
const Breakfast = (props) => {
    const { _id, imageURL, name, price } = props.product;
    const history = useHistory();
    const handleClick = (id) => {
        const url = `productDetails/${id}`;
        history.push(url);
    }
    return (
        <div className="h-100 pb-4">
            <Card onClick={() => handleClick(_id)} className="shadow mb-4 p-3 border-0 h-100" id="card-radius">
                <Card.Img variant="top" className="center-block" src={imageURL} id="product-image" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>The most delicious food</p>
                    </Card.Text>
                    <div className="">
                        <Button className="w-100 bg-success" id="book-table-btn">Add to Cart</Button>
                    </div>
                </Card.Body>
                <div id="price-overlay">
                    <b>${price}</b>
                </div>
            </Card>
        </div>
    );
};

export default Breakfast;