import React from 'react';
import './DeliveryProduct.css';
import rider from './rider.png';
import helmet from './helmet.png';
import { Button } from 'react-bootstrap';
const DeliveryProduct = () => {
    return (
        <div className="container" id="delivery">
            <div className="row">
                <div className="col-md-8" >
                    <iframe id="googleMap" title="My order progress" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d470881.94085475284!2d91.49896656462687!3d22.77409478316088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1617860357715!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="col-md-4 p-3 bg-light rounded-top">
                    <div className="rider-image mb-3">
                        <img src={rider} className="img-fluid" id="riderImg" alt="" />
                    </div>
                    <div className="location bg-white p-3 mb-3">
                        <div className="from mb-5">
                            <p>Your Location</p>
                            <b>Fatickchari, Chittagong</b>
                        </div>
                        <div className="to">
                            <p>Shop Address</p>
                            <b>Gulshan Plaza Restaura GPR</b>
                        </div>
                    </div>
                    <div className="estimated-time">
                        <h2>12:30</h2>
                        <p>Estimated Delivery Time</p>
                    </div>
                    <div className="supplier bg-white p-2 d-flex align-items-center mb-3">
                        <div className="helmet">
                            <img id="helmetImg" className="img-fluid" src={helmet} alt="" />
                        </div>
                        <div className="rider-details ml-4">
                            <b>Hamim</b>
                            <p>Your Rider</p>     
                        </div>
                    </div>
                    <Button variant="danger" className="w-100">Contact</Button>
                </div>
            </div>
        </div>
    );
};

export default DeliveryProduct;