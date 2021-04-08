import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import SingleProduct from '../SingleProduct/SingleProduct';

const ProductDetails = () => {
    const {productId} = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product/' + productId)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [productId])
    return (
        <div>
            {
                <SingleProduct product={products}></SingleProduct>
            }
        </div>
    );
};

export default ProductDetails;