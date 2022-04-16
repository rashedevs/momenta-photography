import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='mb-3'>
            <Carousel>
                <Carousel.Item>
                    <img style={{ height: "620px" }}
                        className="d-block w-100"
                        src="https://www.indiaeducation.net/imagesvr_ce/5434/Photography_1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Momenta Photography</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "620px" }}
                        className="d-block w-100"
                        src="https://www.unitec.ac.nz/sites/default/files/public/Unitec_Website_1594x675_Photography.jpg?timestamp=1497842425"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Momenta Photography</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "620px" }}
                        className="d-block w-100"
                        src="https://images.squarespace-cdn.com/content/v1/5c52750e8f513001c63a48f1/1564377375172-2M9N5PE8G6DN5RCOQ18O/ADVENTURE+Lola+Photography_045.jpg?format=1000w"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Momenta Photography</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;