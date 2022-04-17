import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

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

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('')
    const passwordRef = useRef('')

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    })


    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Email sent successfully')
        }
        else {
            toast('Please enter your email')
        }
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    let errorBox;
    if (error || error1) {
        errorBox = <p className='text-danger'>Error: {error?.message}</p>
    }
    const handleLoginSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='container w-50 mx-auto login-box'>
            <h2 className='text-dark my-5 text-center'>Please Login</h2>
            <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit" className='d-block mx-auto w-50 my-2 fw-bold'>
                    Login
                </Button>
            </Form>
            {errorBox}
            <p className='mt-3'>New to Momenta? <Link to='/register' className='text-primary pe-auto text-decoration-none ms-1'>Please Register</Link></p>

            <p className='mt-3'>Forgot Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
            <GoogleLogin></GoogleLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;