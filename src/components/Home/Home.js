import React, { useEffect, useState } from 'react';
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = 'https://enigmatic-refuge-11397.herokuapp.com/allProduct'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);
    return (
        <div className="text-center container">
            <Tabs defaultActiveKey="breakfast" className="d-flex justify-content-center border-0" >
                <Tab eventKey="breakfast" title="Breakfast">
                    <Row className = "mt-5">
                        {
                            products.filter(product => product.productType === 'Breakfast').map(filteredProduct =><Col lg={4} md={6} sm={6} xs={12}><Breakfast product={filteredProduct}></Breakfast></Col>)
                        }
                    </Row>
                </Tab>
                <Tab eventKey="lunch" title="Lunch">
                    <Row className = "mt-5">
                        {
                            products.filter(product => product.productType === 'Lunch').map(filteredProduct =><Col lg={4} md={6} sm={6} xs={12}><Lunch product={filteredProduct}></Lunch></Col>)
                        }
                    </Row>
                </Tab>
                <Tab eventKey="dinner" title="Dinner">
                    <Row className = "mt-5">
                        {
                            products.filter(product => product.productType === 'Dinner').map(filteredProduct => <Col lg={4} md={6} sm={6} xs={12}><Dinner product={filteredProduct}></Dinner></Col>)
                        }
                    </Row>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Home;