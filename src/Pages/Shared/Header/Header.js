import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import camera from '../../../images/logo/camera.jpg';
import CustomLink from '../../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark" className='header py-3'>
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ mouse: "pointer", fontSize: "22px" }}>
                    <span><img style={{ width: "32px" }} src={camera} alt="" /></span> Momenta Photography</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='all-links'>
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/blogs">Blogs</CustomLink>
                        <CustomLink to="/about">About</CustomLink>
                        {
                            user ?
                                <button className='logout btn btn-link text-white text-decoration-none' onClick={() => signOut(auth)}>Sign Out</button>
                                :
                                <CustomLink eventkey={2} as={Link} to="/login">
                                    Login
                                </CustomLink>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;