import React from 'react';
import './AboutUs.css'
import chef from '../../images/chefs.png'
import { Button } from 'react-bootstrap';
const AboutUs = () => {
    return (
        <div className="container  common-margin">
            <div className="heading mb-5">
                <label htmlFor="" className="label-styling">SOME WORDS ABOUT US</label>
            </div>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <img src={chef} className="img-fluid" alt="" />
                </div>
                <div className="col-md-6 text-left">
                    <h2 className="mb-3 text-success">Welcome to know about us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam saepe laboriosam explicabo sunt esse veritatis voluptate aliquid eligendi odio perspiciatis vitae quisquam eius, cupiditate magnam dignissimos iure velit hic! Hic obcaecati, fugiat qui facere fuga autem natus nobis? Saepe, esse? Incidunt nam sunt, tempore repellendus </p>
                    <p>veniam explicabo neque itaque possimus odit voluptates amet quo sapiente cumque quidem consequuntur temporibus? Id cumque earum nihil, assumenda obcaecati repellat ea vel placeat quisquam dolorem a, consequatur deserunt illum? </p>

                    <Button id="book-table-btn">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;