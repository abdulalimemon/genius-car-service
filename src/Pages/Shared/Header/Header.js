import React, { useReducer } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png'
import { signOut } from '@firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const usersignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" className="w-50"><img src={logo} className="w-75" height="50" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="button-style" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="align-items-center">
                        <Nav.Link href="home#service">Services</Nav.Link>
                        <Nav.Link href="/home#expert">Experts</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>

                        {
                            user && <>
                                <NavDropdown title="Links" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/addservice">Add Service</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/manageservice">
                                        Manage Service
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/sample">Sample</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        }

                        {
                            user && <>
                                <Nav.Link as={Link} to="/Orders">Orders</Nav.Link>
                            </>
                        }
                        {
                            user ?
                                <button className="py-2 px-4 btn btn-light" onClick={usersignOut}>Sign Out</button>
                                :
                                <Nav.Link as={Link} to="/login"><button className="py-2 px-4 btn btn-light" >Login</button></Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;