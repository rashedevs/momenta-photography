import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark" className='header py-3'>
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ mouse: "pointer", fontSize: "22px" }}>Momenta Photography</Navbar.Brand>
                {/* <Navbar.Brand as={Link} to="/">
                <img height={35} src={logo} alt="" />
            </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className='all-links'>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {
                            user ?
                                <button className='logout btn btn-link text-white text-decoration-none' onClick={() => signOut(auth)}>Sign Out</button>
                                :
                                <Nav.Link eventKey={2} as={Link} to="/login">
                                    Login
                                </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;