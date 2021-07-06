import React from 'react'; 
import { Button, Form, Row, Col} from 'react-bootstrap';

const ContactForm = () => {
    return (
        <div className="container common-margin">
            <div className="heading mb-5">
                <label htmlFor="">GET IN TOUCH</label>
            </div>
            <div className="row">
                <div className="col-md-8 offset-md-2 shadow p-5">
                    <Form>
                        <Row className="mb-4">
                            <Col>
                                <Form.Control placeholder="Name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Email" />
                            </Col>
                        </Row>
                        <textarea className="form-control" name="" id="" placeholder="Description" cols="30" rows="10"></textarea>
                        <div className="submit-contact-form mt-4 ">
                            <Button id="book-table-btn" className="w-100">Send</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;