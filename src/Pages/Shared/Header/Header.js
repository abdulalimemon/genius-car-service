import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" className="w-50"><img src={logo} className="w-750" height="50" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="button-style" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="home#service">Services</Nav.Link>
                        <Nav.Link href="/home#expert">Experts</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;