// Footer.js

import React from "react";

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">
            <div className="container text-center">
                <h2 className="mb-4">Let's Get Started Something New</h2>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5 className="text-center">Product</h5>
                        <ul className="list-unstyled text-center text-sm-left">
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Documentation</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5 className="text-center">Company</h5>
                        <ul className="list-unstyled text-center text-sm-left">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5 className="text-center">Resources</h5>
                        <ul className="list-unstyled text-center text-sm-left">
                            <li>Blog</li>
                            <li>eBooks</li>
                            <li>Webinars</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5 className="text-center">Legal</h5>
                        <ul className="list-unstyled text-center text-sm-left">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
