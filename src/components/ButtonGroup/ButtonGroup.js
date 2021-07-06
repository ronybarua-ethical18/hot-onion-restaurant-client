import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonGroup = ({next, previous}) => {
    return (
        <div className="container d-flex justify-content-center">
            
            <Button onClick={previous} className="mr-3"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></Button>
            <Button onClick={next}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Button>
        </div>
    );
};

export default ButtonGroup;