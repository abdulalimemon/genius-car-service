import React from 'react';
import { Button } from 'react-bootstrap';
import './SocialLogin.css';
import GoogleLogo from '../../../images/social/google.png';

const SocialLogin = () => {
    return (
        <div>
            <div className="divider d-flex align-items-center justify-content-center align-self-center">
                <div className="divider-border"></div>
                <div><p className="mx-3 pt-2">or</p></div>
                <div className="divider-border"></div>
            </div>
            <div className="text-center">
                <div className="mb-3">
                    <Button variant="outline-dark" className="w-100 py-2 d-flex align-items-center justify-content-center"><img src={GoogleLogo} width="30px" alt='google logo' /><span className="ms-3">Google Sign In</span></Button>
                </div>
                <div className="mb-2">
                    <Button variant="outline-dark" className="w-100 py-2 d-flex align-items-center justify-content-center"><img src={GoogleLogo} width="30px" alt='google logo' /><span className="ms-3">Google Sign In</span></Button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;