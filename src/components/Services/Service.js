import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';

const Service = (props) => {
    const { name, serviceIcon, desc } = props.service
    return (
        <div className="col-md-4 mb-4 text-justify">
            <Card className="mb-4 border-0 h-100 shadow py-3" id="card-radius">
                <div className="d-flex justify-content-center">
                    <FontAwesomeIcon icon={serviceIcon} className="fa-4x text-danger"/>
                </div>
                <Card.Body>
                    <Card.Title><h3 className="text-center"><strong>{name}</strong></h3></Card.Title>
                    <Card.Text>
                        <p>{desc}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;