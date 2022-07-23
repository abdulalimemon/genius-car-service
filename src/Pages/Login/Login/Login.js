import React, { useRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className="my-5 container">
            <Row >
                <Col xs={1} lg={4} md={2}></Col>
                <Col className="border border-dark border-2 rounded-2 py-3">
                    <h2 xs={10} lg={4} md={8} className="fs-2 text-primary text-center">Login</h2>
                    <Row>
                        <Col xs={0} lg={1} md={1}></Col>
                        <Col xs={12} lg={10} md={10}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100 text-center">
                                    Login
                                </Button>
                                <p className="text-danger text-center py-2 fs-5">{error?.message}</p>
                                {
                                    loading && <p className="text-danger text-center py-2 fs-3">Loading</p>
                                }
                            </Form>
                            <p className="py-3">New to Genius Car Service? <Link to="/register" className="text-decoration-none">Register Now.</Link></p>
                        </Col>
                        <Col xs={0} lg={1} md={1}></Col>
                    </Row>
                </Col>
                <Col xs={1} lg={4} md={2}></Col>
            </Row>
        </div>
    );
};

export default Login;