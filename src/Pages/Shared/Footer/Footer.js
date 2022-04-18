import React from 'react';
import './Footer.css';
import foot from '../../../images/foot.png';

const Footer = () => {
    return (
        <footer className='container-fluid footer-box'>
            <div>
                <img style={{ height: "100px" }} src={foot} alt="" />
            </div>
            <div className="footer-items">
                <h6>Momenta Photography</h6>
                <p><small>Copyright &copy; {new Date().getFullYear()}</small></p>
            </div>
        </footer>
    );
};

export default Footer;