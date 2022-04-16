import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='container-fluid footer-box'>
            <div className="footer-items">
                <h6>Momenta Photography</h6>
                <p><small>Copyright &copy; {new Date().getFullYear()}</small></p>
            </div>
        </footer>
    );
};

export default Footer;