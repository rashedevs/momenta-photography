import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const navigate = useNavigate()
    const { id, name, img, description, price } = service
    const navigateToCheckout = id => {
        navigate(`/checkout/${id}`)
    }
    return (
        <div className='service h-100'>
            <img style={{ width: "100%", height: "250px" }} src={img} alt="" />
            <h4 className='my-3'>{name}</h4>
            <h4 className='my-2'>${price}</h4>
            <p className='my-3 mx-3'><small>{description}</small></p>
            <button onClick={() => navigateToCheckout(id)} className="my-4 btn-danger fw-bold px-3 rounded py-1">Book Now</button>
        </div>
    );
};

export default Service;