import React, { useRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';




const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate("/home")
    }

    return (
        <div className="my-5 container">
            <Row >
                <Col xs={1} lg={4} md={2}></Col>
                <Col className="border border-dark border-2 rounded-2 py-3">
                    <h2 xs={10} lg={4} md={8} className="fs-2 text-primary text-center">Register</h2>
                    <Row>
                        <Col xs={0} lg={1} md={1}></Col>
                        <Col xs={12} lg={10} md={10}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control ref={emailRef} type="email" placeholder="Enter Email" required />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100 text-center">
                                    Register
                                </Button>
                                <p className="text-danger text-center py-1 fs-5">{error?.message}</p>
                                {
                                    loading && <p className="text-danger text-center py-1 fs-3">Loading</p>
                                }
                            </Form>
                            <p>Already have an account? <Link to="/login" className="text-decoration-none">Login Now.</Link></p>
                            <SocialLogin></SocialLogin>
                        </Col>
                        <Col xs={0} lg={1} md={1}></Col>
                    </Row>
                </Col>
                <Col xs={1} lg={4} md={2}></Col>
            </Row>
        </div>
    );
};

export default Register;