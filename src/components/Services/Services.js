import React, { useState } from 'react';
import fakeServiceData from './fakeServiceData';
import Service from './Service';
import './Services.css'
const Services = () => {
    const [serviceData, setServiceData] = useState(fakeServiceData)
    return (
        <div className="container common-margin">
            <div className="heading mb-5">
                <label htmlFor="">OUR AMAZING SERVICES</label>
            </div>
            <div className="row">
                {serviceData.map((service) => <Service key={service.id} service={service} />)}
            </div>
        </div>
    );
};

export default Services;