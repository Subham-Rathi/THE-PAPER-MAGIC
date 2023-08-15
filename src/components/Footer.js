import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} The Paper Magic. All rights reserved.</p>
                <p>Contact us: contact@thepapermagic.com</p>
            </div>
        </footer>
    );
}

export default Footer;
