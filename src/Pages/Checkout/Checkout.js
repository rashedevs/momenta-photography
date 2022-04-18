import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const { serviceId } = useParams()
    const handleCheckout = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const phone = event.target.phone.value
        if (name && email && phone) {
            toast('Thank you for the booking')
        }
    }
    return (
        <>
            <h3 className='text-primary mt-5'>Your selected service ID: {serviceId}</h3>
            <div className='container' style={{ minHeight: "60vh" }}>
                <Form onSubmit={handleCheckout} className='w-50 mx-auto mt-5'>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Control name='name' type="text" placeholder="Enter your name" required />
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control name='phone' type="number" placeholder="Phone" required />
                    </Form.Group>

                    <Button variant="primary" type="submit" className='px-5 mb-4'>
                        Checkout
                    </Button>
                </Form>
                <ToastContainer></ToastContainer>
            </div>
        </>
    );
};

export default Checkout;