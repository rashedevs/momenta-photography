import React from 'react';
import { Carousel } from 'react-bootstrap';
import cam from '../../images/cam.png';

const Banner = () => {
    return (
        <div className='mb-3'>
            <h3 className='text-danger mb-4 fw-bold'>Capture your best moments <span>
                <img style={{ width: "50px" }} src={cam} alt="" />
            </span></h3>
            <Carousel>
                <Carousel.Item>
                    <img style={{ height: "550px" }}
                        className="d-block w-100"
                        src="https://images.squarespace-cdn.com/content/v1/5c52750e8f513001c63a48f1/1564377375172-2M9N5PE8G6DN5RCOQ18O/ADVENTURE+Lola+Photography_045.jpg?format=1000w"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Latest Gadgets & Gears</h3>
                        <p>I do believe on my latest gadgets for pixel perfect shot.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "550px" }}
                        className="d-block w-100"
                        src="https://www.unitec.ac.nz/sites/default/files/public/Unitec_Website_1594x675_Photography.jpg?timestamp=1497842425"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Smart Photo Packages</h3>
                        <p>Packages on a limited budget, I'll give you the best quality.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "550px" }}
                        className="d-block w-100"
                        src="https://www.indiaeducation.net/imagesvr_ce/5434/Photography_1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Award Winning</h3>
                        <p>Best Photographer award as a golden clicker.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;