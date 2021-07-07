import React from 'react';
import { Button } from 'react-bootstrap';
import banner from './banner.png';
import './Banner.css'
const Banner = () => {
    return (
        <div className="container banner-area text-left" id="home">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h2 className="banner-title">You wanna try our fresh delicious foods?</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam sint aperiam perspiciatis quos porro ab expedita quas provident recusandae nostrum reiciendis voluptate facilis consectetur molestiae, officiis corrupti! Ab, at.
                    </p>
                    <Button id="book-table-btn">Book a table</Button>
                </div>
                <div className="col-md-6 d-flex justify-content-end order-1"> 
                    <img src={banner} id="banner" className="img-responsive img-fluid" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Banner;