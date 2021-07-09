import React, { useEffect } from 'react';
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import AboutUs from '../AboutUs/AboutUs';
import Breakfast from '../Breakfast/Breakfast';
import ChefTeams from '../ChefTeams/ChefTeams';
import ClientReviews from '../ClientReviews/ClientReviews';
import ContactForm from '../ContactForm/ContactForm';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import Services from '../Services/Services';
import './Home.css'
import { fetchProductData } from '../../redux/Shopping/shopping-actions'
import { connect } from 'react-redux';

const Home = ({ products, fetchProductData }) => {

    useEffect(() =>{
        fetchProductData()
    }, [])

    return (
        <div className="text-center container">
            <div id="product">
                <Tabs defaultActiveKey="breakfast" id="product" className="d-flex justify-content-center border-0" >
                    <Tab eventKey="breakfast" title="Breakfast">
                        <Row className = "mt-5">
                            {
                                products.filter(product => product.productType === 'Breakfast').map(filteredProduct =><Col lg={4} md={6} sm={6} xs={12}><Breakfast key={filteredProduct.id} product={filteredProduct}></Breakfast></Col>)
                            }
                        </Row>
                    </Tab>
                    <Tab eventKey="lunch" title="Lunch">
                        <Row className = "mt-5">
                            {
                                products.filter(product => product.productType === 'Lunch').map(filteredProduct =><Col lg={4} md={6} sm={6} xs={12}><Lunch key={filteredProduct.id} product={filteredProduct}></Lunch></Col>)
                            }
                        </Row>
                    </Tab>
                    <Tab eventKey="dinner" title="Dinner">
                        <Row className = "mt-5">
                            {
                                products.filter(product => product.productType === 'Dinner').map(filteredProduct => <Col lg={4} md={6} sm={6} xs={12}><Dinner key={filteredProduct.id} product={filteredProduct}></Dinner></Col>)
                            }
                        </Row>
                    </Tab>
                </Tabs>
            </div>
            <div id="service">
                <Services />
            </div>
            <div id="about">
                <AboutUs />
            </div>
            <div id="chef">
                <ChefTeams />
            </div>
            <div id="reviews">
               <ClientReviews />
            </div>
            <div id="contact">
               <ContactForm />
            </div>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return{
        products: state.shop.products
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchProductData: () => dispatch(fetchProductData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);