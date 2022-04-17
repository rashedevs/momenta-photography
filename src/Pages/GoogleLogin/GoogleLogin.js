import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/logo/google.png'
import Loading from '../Shared/Loading/Loading';

const GoogleLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (user) {
            navigate('/home')
        }
    }, [user])
    let errorBox;
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorBox = <p className='text-danger'>Error: {error?.message}</p>
    }

    return (
        <div className='conatiner'>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: "1px" }} className='w-50 bg-info'></div>
                <p className='px-3 mt-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-info'></div>
            </div>
            {errorBox}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-secondary w-50 d-block mx-auto my-3'>
                    <img style={{ width: "30px" }} className="rounded me-3" src={google} alt="" />
                    <span className='text-white fw-bold'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;