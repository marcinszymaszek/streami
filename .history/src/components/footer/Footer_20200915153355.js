import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-outter">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-12 col-md-12 col-sm-12" id="social-media-module">

                            <nav>
                                <ul>
                                    <li>
                                        <a href="/#" >
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#" >
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#" >
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#" >
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                        </div>


                        <div className="col-lg-12 col-md-12 col-sm-12" id="links-module">
                            <nav>
                                <ul class="links-list">
                                    <li>
                                        <a href="/#" >
                                            FAQ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            Terms of use
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            Privacy policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            Cookie Policy
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12" id="copyright-module">
                            <span class="copyright">
                                © 2020 Streami. All rights reserved. The site may contain content intended for adult viewers only.
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </footer >
    );
}

export default Footer;

