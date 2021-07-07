import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faHome, faPlusCircle, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, ButtonGroup, Col, Form, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ManageProduct from '../ManageProduct/ManageProduct';
import './AdminPanel.css';
import logo from './logo.png';
const AdminPanel = () => {
    const { handleSubmit, register } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [navigation, setNavigation] = useState(false);
    const [disableState, setDisableState] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        const url = 'https://enigmatic-refuge-11397.herokuapp.com/allProduct'
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const onSubmit = data => {
        const productData = {
            name: data.name,
            productType: data.productType,
            price: data.price,
            description: data.description,
            imageURL: imageURL
        }
        console.log(productData)
        if (productData.imageURL !== null) {
            const url = 'https://enigmatic-refuge-11397.herokuapp.com/addProduct';
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData)
            })
                .then(res => console.log('server side response', res))
                .then(data => {
                    alert('product added successfully');
                })
        }
        else {
            console.log('Image url is null')
        }
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const productImage = new FormData();
        productImage.set('key', 'f7bff2bc732c350dd2aed72fdcb8156b');
        productImage.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', productImage)
            .then(function (response) {
                if (response) {
                    setDisableState(false);
                }
                setImageURL(response.data.data.display_url);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="">
            <div className="row no-gutters">
                <div className="col-md-3 mainPanel text-center bg-white pt-3" id="mainPanel">
                    <img src={logo} className="img-fluid brand-logo" alt="" />
                    <div className="actions mt-5 text-left">
                        <div className="p-3 m-5">
                            <p><Link className="d-flex align-items-center" onClick={() => setNavigation(true)}>
                                <FontAwesomeIcon icon={faProductHunt} className="mr-3 fa-2x text-dark"></FontAwesomeIcon>
                                <b className="text-dark">Manage products</b></Link></p>
                            <p><Link className="d-flex align-items-center" onClick={() => setNavigation()}>
                                <FontAwesomeIcon icon={faPlusCircle} className="mr-3 fa-2x text-danger"></FontAwesomeIcon>
                                <b className="text-dark">Add Product</b></Link></p>
                            <p><Link to="/home" className="d-flex align-items-center">
                                <FontAwesomeIcon icon={faHome} className="mr-3 fa-2x text-success"></FontAwesomeIcon>
                                <b className="text-dark">Go Home</b></Link></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-9" id="mainPanel">
                    <div className="p-3" >
                        {
                            !navigation ? <h2 id="title"><span>Add</span> Product</h2> : <h2 id="title"><span>Manage</span> Product</h2>
                        }
                    </div>
                    <div id="manage-table" className="manage-product mt-5">
                        {
                            navigation && <Table striped bordered hover size="sm" className=" shadow">
                                <thead>
                                    <tr>
                                        <th className="p-3">Product Name</th>
                                        <th className="p-3">Product Type</th>
                                        <th className="p-3">price</th>
                                        <th className="p-3">action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map(product => <ManageProduct product={product}></ManageProduct>)
                                    }
                                </tbody>
                            </Table>
                        }
                    </div>
                    {!navigation && <div className="form-event mainPanel">
                        <div className="add-product bg-white p-4">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridname">
                                        <Form.Label><b>Product title</b></Form.Label>
                                        <Form.Control {...register("name")} name="name" type="text" placeholder="Enter product title" required />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridtype">
                                        <Form.Label><b>Product type</b></Form.Label>
                                        <Form.Control as="select" name="productType" {...register("productType")}>
                                            <option>Breakfast</option>
                                            <option>Lunch</option>
                                            <option>Dinner</option>
                                        </Form.Control>

                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridDescription">
                                        <Form.Label><b>Description</b></Form.Label>
                                        <textarea name="description" {...register("description")} placeholder="Enter Description" className="form-control" id="" cols="30" rows="8"></textarea>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPrice">
                                        <Form.Label><b>Product price</b></Form.Label>
                                        <Form.Control type="number" {...register("price")} placeholder="Enter product price" name="price" required />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group controlId="formGridEmail">
                                    <input type="file" onChange={handleImageUpload} name="" id="input-file" />
                                    <label htmlFor="input-file" id="file-label"><FontAwesomeIcon icon={faUpload} className="mr-3"></FontAwesomeIcon>Upload Image</label>
                                </Form.Group>
                                <div className="d-flex align-items-center justify-content-end">
                                    <ButtonGroup className="ml-auto">
                                        <Button disabled={disableState} type="submit" id="btn-breakfast" className="bg-danger">
                                            Add Product
                                        </Button>
                                    </ButtonGroup>
                                </div>
                            </Form>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;