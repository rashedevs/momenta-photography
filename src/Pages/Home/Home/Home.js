import React from 'react';
import Banner from '../../Banner/Banner';
import Works from '../../Works/Works';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className="banner">
                <Banner></Banner>
            </div>
            <div className='services'>
                <Services></Services>
            </div>
            <div className="works">
                <Works></Works>
            </div>
        </div>
    );
};

export default Home;