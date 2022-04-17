import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Register = () => {
    return (
        <div className='container' style={{ height: "120vh" }}>
            <div className='register-form'>
                <h2 className='text-dark my-5 text-center'>Please Register</h2>
                <form>
                    {/* <input type="text" name="" id="" placeholder='Your Name' /> */}

                    <input type="email" name="email" id="11" placeholder='Email Address' required />

                    <input type="password" name="password" id="22" placeholder='Password' required />

                    <input type="password" name="confirmPassword" id="33" placeholder='Confirm Password' required />

                    <input
                        // disabled={!agree}
                        className='btn btn-primary w-50 mx-auto mt-2' type="submit" value="Register" />
                </form>
                {/* {errorBox} */}
                <p>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none'> Please Login</Link></p>
                <GoogleLogin></GoogleLogin>
            </div>
        </div>
    );
};

export default Register;