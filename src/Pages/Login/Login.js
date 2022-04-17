import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-dark my-5 text-center'>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit" className='d-block mx-auto w-50 my-2'>
                    Login
                </Button>
            </Form>
            {/* {errorBox} */}
            <p className='mt-3'>New to Momenta? <Link to='/register' className='text-primary pe-auto text-decoration-none'>Please Register</Link></p>

            <p className='mt-3'>Forgot Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button></p>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Login;