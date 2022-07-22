import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <Navbar bg="dark" variant="light">
            <Container>
                <Navbar.Brand to="/">
                    <img src={logo} className="w-100" alt="logo" />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/">Home</Link>
                    <Link to="/">Features</Link>
                    <Link to="/">Pricing</Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;