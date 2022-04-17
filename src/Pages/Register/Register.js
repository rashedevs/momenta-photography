import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (user) {
        navigate('/home')
    }
    if (loading) {
        return <Loading></Loading>
    }
    let errorBox;
    if (error) {
        errorBox = <p className='text-danger'>Error: {error?.message}</p>
    }
    const handleRegister = async (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword = event.target.confirmPassword.value

        if (password !== confirmPassword) {
            toast('Password did not match')
            return;
        }
        await createUserWithEmailAndPassword(email, password)
        navigate('/home')
    }
    return (
        <div className='container register-box'>
            <div className='register-form'>
                <h2 className='text-dark my-5 text-center'>Please Register</h2>
                <form onSubmit={handleRegister}>

                    <input type="email" name="email" id="11" placeholder='Email Address' required />

                    <input type="password" name="password" id="22" placeholder='Password' required />

                    <input type="password" name="confirmPassword" id="33" placeholder='Confirm Password' required />

                    <input className='baton w-50 mx-auto mt-2 fw-bold text-white' type="submit" value="Register" />
                </form>
                {errorBox}
                <p>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none'> Please Login</Link></p>
                <GoogleLogin></GoogleLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;