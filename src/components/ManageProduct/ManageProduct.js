import React from 'react';
import { Button } from 'react-bootstrap';

const ManageProduct = (props) => {
    const {_id, name, productType, price} =  props.product;
    const deleteProduct = (id) => {
        console.log("i am touched")
        console.log(id)
        fetch(`http://localhost:5000/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Data deleted successfully from database')
                }
            })
    }
    return (
        <tr>
            <td className="pr-3 pl-3">{name}</td>
            <td className="pr-3 pl-3">{productType}</td>
            <td className="pr-3 pl-3">${price}</td>
            <td className="pr-3 pl-3"><Button variant="warning mr-2 text-white">Update</Button>
                <Button variant="danger"
                    onClick={(e) => {
                        deleteProduct(_id)
                        e.target.parentNode.parentNode.style.display = 'none'
                    }}>Delete</Button></td>
        </tr>
    );
};

export default ManageProduct;