import React from 'react';
import { FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";


function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-first">
                    <img src="./images/logo.svg" alt="Logo" />
                    <div className="footer-social">
                        <a className="footer-link" rel="noreferrer" target="_blank" href="https://www.facebook.com/"><FaFacebookSquare /></a>
                        <a className="footer-link" rel="noreferrer" target="_blank" href="https://twitter.com/"><FaTwitter /></a>
                        <a className="footer-link" rel="noreferrer" target="_blank" href="https://www.pinterest.com/"><FaPinterest /></a>
                        <a className="footer-link" rel="noreferrer" target="_blank" href="https://www.instagram.com/"><FaInstagram /></a>
                    </div>
                </div>

                <div className="footer-second">
                    <div className="footer-links-container">
                        <div className="footer-group">
                            <h6>Our company</h6>
                            <button>How we work</button>
                            <button>Why Insure?</button>
                            <button>View plans</button>
                            <button>Reviews</button>
                        </div>

                        <div className="footer-group">
                            <h6>Help me</h6>
                            <button>FAQ</button>
                            <button>Terms of use</button>
                            <button>Privacy policy</button>
                            <button>Cookies</button>
                        </div>

                        <div className="footer-group">
                            <h6>Contact</h6>
                            <button>Sales</button>
                            <button>Support</button>
                            <button>Live chat</button>
                        </div>

                        <div className="footer-group">
                            <h6>Others</h6>
                            <button>Careers</button>
                            <button>Press</button>
                            <button>Licenses</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;