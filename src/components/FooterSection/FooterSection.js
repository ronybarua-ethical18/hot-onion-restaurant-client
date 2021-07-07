import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
const FooterSection = () => {
    return (
        <div className="common-margin bg-danger text-white">
            <div className="w-100 m-auto">
                <div className="row m-0 p-5">
                    <div className="col-md-3 mb-4">
                        <h2><strong>Red Onion</strong></h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, adipisci.</p>
                        <strong>+800-0XXXX97655</strong>
                        <div className="social-contacts d-flex justify-content-evenly mt-3">
                            <FontAwesomeIcon className="fa-2x" icon={faFacebook}></FontAwesomeIcon>
                            <FontAwesomeIcon className="fa-2x mx-3" icon={faTwitter}></FontAwesomeIcon>
                            <FontAwesomeIcon className="fa-2x mr-3" icon={faInstagram}></FontAwesomeIcon>
                            <FontAwesomeIcon className="fa-2x" icon={faLinkedin}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h2><strong>Company</strong></h2>
                        <ul className="p-0">
                            <li>About</li>
                            <li>Blog</li>
                            <li>Customer</li>
                            <li>Hire Us</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h2><strong>Features</strong></h2>
                        <ul>
                            <li>Press</li>
                            <li>Release Notes</li>
                            <li>Integrations</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h2><strong>Documentation</strong></h2>
                        <ul>
                            <li>Support</li>
                            <li>Docs</li>
                            <li>API References</li>
                            <li>Status</li>
                            <li>Tech References</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-title bg-danger text-center p-3 text-white">
                <hr />
                <p>All rights Reserved | ronybarua.ethical18@gmail.com By {new Date().getFullYear()}</p>
            </div>
        </div>
    );
};

export default FooterSection;