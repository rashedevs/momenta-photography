import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const navigate = useNavigate()
    const { name, img, description, price } = service
    return (
        <div className='service'>
            <img style={{ width: "100%" }} src={img} alt="" />
            <h4>{name}</h4>
            <h4>${price}</h4>
            <p>{description}</p>
            <button onClick={() => navigate("/checkout")}>Book Now</button>
        </div>
    );
};

export default Service;