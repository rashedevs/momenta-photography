import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('')
    const passwordRef = useRef('')

    if (user) {
        navigate(from, { replace: true })
    }
    if (loading) {
        return <Loading></Loading>
    }
    let errorBox;
    if (error) {
        errorBox = <p className='text-danger'>Error: {error?.message}</p>
    }
    const handleLoginSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-dark my-5 text-center'>Please Login</h2>
            <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit" className='d-block mx-auto w-50 my-2'>
                    Login
                </Button>
            </Form>
            {errorBox}
            <p className='mt-3'>New to Momenta? <Link to='/register' className='text-primary pe-auto text-decoration-none'>Please Register</Link></p>

            <p className='mt-3'>Forgot Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button></p>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Login;