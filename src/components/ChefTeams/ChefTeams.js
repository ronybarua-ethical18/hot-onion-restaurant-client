import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import fakeChefData from './fakeChefData';
import './ChefTeams.css'
const ChefTeams = () => {
    const [chefData, setChefData] = useState(fakeChefData)
    return (
        <div className="container common-margin">
            <div className="heading mb-5">
                <label className="label-styling" htmlFor="">OUR CHEF TEAMS</label>
            </div>
            <div className="row">
                {
                    chefData.map(chef => <div className="col-md-4 mb-4">
                        <Card className="mb-4 border-0 h-100 shadow" id="card-radius">
                            <div className="d-flex justify-content-center align-items-center"><img variant="top" className="service_image" src={chef.img} alt="" /></div>
                            <Card.Body>
                                <Card.Title><h3 className="text-center text-success"><strong>{chef.name}</strong></h3></Card.Title>
                                <Card.Text> 
                                    <p>{chef.info}</p>
                                </Card.Text>

                                <div className="social-icons d-flex justify-content-between">
                                    <FontAwesomeIcon className="fa-2x" icon={chef.facebook}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="fa-2x" icon={chef.twitter}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="fa-2x" icon={chef.insta}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="fa-2x" icon={chef.linkedin}></FontAwesomeIcon>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ChefTeams;