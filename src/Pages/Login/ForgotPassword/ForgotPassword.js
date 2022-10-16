import React, { useRef } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ForgotPassword = () => {

    const emailRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [user, loading] = useAuthState(auth);

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        sendPasswordResetEmail(email);
        toast('A reset password email has been sent to your email address. please check your inbox or spam folder.');
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className="my-5 container">
            <Row >
                <Col xs={1} lg={4} md={2}></Col>
                <Col className="border border-dark border-2 rounded-2 py-3">
                    <h2 xs={10} lg={4} md={8} className="fs-2 text-primary text-center my-3">Forgot password</h2>
                    <Row>
                        <Col xs={0} lg={1} md={1}></Col>
                        <Col xs={12} lg={10} md={10}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control ref={emailRef} type="email" placeholder="Enter Email Address" required />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100 text-center">
                                    Next
                                </Button>
                                <p className="text-danger text-center py-1 fs-5">{error?.message}</p>
                                {
                                    loading && <p className="text-danger text-center py-1 fs-3">Loading</p>
                                }
                            </Form>
                        </Col>
                        <Col xs={0} lg={1} md={1}></Col>
                    </Row>
                </Col>
                <Col xs={1} lg={4} md={2}></Col>
            </Row>
        </div>
    );
};

export default ForgotPassword;