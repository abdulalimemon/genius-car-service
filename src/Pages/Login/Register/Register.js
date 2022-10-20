import React, { useRef, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../../hooks/useToken';

const Register = () => {
    const [updateProfile, updating, profileError] = useUpdateProfile(auth);
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user, loading, error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [token] = useToken(user);

    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    // const agreeRef = useRef(''); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // const agree = agreeRef.current.checked;
        // if (agree) {
        //     createUserWithEmailAndPassword(email, password)
        // }
        await createUserWithEmailAndPassword(email, password);
        toast('An user verification email has been sent to your email address. Please check your inbox or spam folder.');
        await updateProfile({ displayName: name });
    }

    if (token) {
        navigate('/');
    }

    if (loading || updating) {
        return <Loading></Loading>;
    }

    return (
        <div className="my-5 container">
            <Row className="mx-2">
                <Col xs={0} lg={3} md={2}></Col>
                <Col xs={12} lg={6} md={8} className="border border-dark border-2 rounded-2 py-3">
                    <h2 className="fs-2 text-primary text-center">Register</h2>
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
                                <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                                    <div className="d-flex">
                                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" className="me-2" />
                                        <Form.Label className={agree ? "text-primary" : "text-danger"}>Accept Genius Car Terms And Conditions.</Form.Label>
                                    </div>
                                </Form.Group>
                                <Button variant="primary" type="submit" className={`w-100 text-center ${agree ? "" : "disabled"}`}>
                                    Register
                                </Button>
                                <p className="text-danger text-center py-1 fs-5">{error?.message} {profileError?.message}</p>
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
                <Col xs={0} lg={3} md={2}></Col>
            </Row>
        </div>
    );
};

export default Register;