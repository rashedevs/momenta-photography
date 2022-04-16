import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service
    return (
        <div className='service'>
            <img style={{ width: "380px" }} src={img} alt="" />
            <h4>{name}</h4>
            <h4>${price}</h4>
            <p>{description}</p>
            <button>Book Now</button>
        </div>
    );
};

export default Service;