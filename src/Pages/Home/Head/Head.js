import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Head.css';

const Head = () => {
    const navigate = useNavigate()
    return (
        <div className='head mb-5'>
            <div className='head-box'>
                <div className='name'>
                    <h3>Hello, I'm</h3>
                    <h1 className='text-danger'>Rashed</h1>
                    <h3>A <span className='text-warning'>Photographer</span> from <span className='text-info'>Dhaka</span></h3>
                </div>
                <div className='detail'>
                    <h4 className='text-warning'>Photographer by born.</h4>
                    <h3 className=''>My clicks creates history, be a part of that.</h3>
                    <button onClick={() => navigate('/about')} className='btn-danger border-none rounded px-3 py-1 fw-bold mt-2'>About Me</button>
                </div>
            </div>

        </div>
    );
};

export default Head;