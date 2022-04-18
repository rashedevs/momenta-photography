import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about-box' style={{ minHeight: "90vh" }}>
            <div className='about-me'>
                <h3>Rashed Uz Zaman</h3>
                <div className='w-50 mx-auto'><hr /></div>
                <p className='px-5'>
                    My goal is to be a fullstack software developer. I strictly follow my routine to achieve my goal. I have started with javascript and nowadays learning front-end technologies. After that, I have a proper plan for Node.js and its back-end related tools.
                </p>
            </div>
        </div>
    );
};

export default About;