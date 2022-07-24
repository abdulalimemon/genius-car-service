import React from 'react';
import { Button } from 'react-bootstrap';
import './SocialLogin.css';
import GoogleLogo from '../../../images/social/google.png';
import FacebookLogo from '../../../images/social/Facebook.png';
import GithubLogo from '../../../images/social/GitHub.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router';
import Loading from '../../Shared/Loading/Loading';



const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorElement;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    if (error || error1) {
        errorElement = <p className="text-danger">{error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate(from, { replace: true });
    }

    if (loading || loading1) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <div className="divider d-flex align-items-center justify-content-center align-self-center">
                <div className="divider-border"></div>
                <div><p className="mx-3 pt-2">or</p></div>
                <div className="divider-border"></div>
            </div>
            {errorElement}
            <div className="text-center">
                <div className="mb-3">
                    <Button onClick={() => signInWithGoogle()} variant="outline-secondary" className="w-100 py-2 d-flex align-items-center justify-content-center"><img src={GoogleLogo} width="30px" alt='google logo' /><span className="ms-3">Google Sign In</span></Button>
                </div>
                <div className="mb-3">
                    <Button variant="outline-secondary" className="w-100 py-2 d-flex align-items-center justify-content-center"><img src={FacebookLogo} width="30px" alt='facebook logo' /><span className="ms-3">Facebook Sign In</span></Button>
                </div>
                <div className="mb-3">
                    <Button onClick={() => signInWithGithub()} variant="outline-secondary" className="w-100 py-2 d-flex align-items-center justify-content-center"><img src={GithubLogo} width="30px" alt='github logo' /><span className="ms-3">GitHub Sign In</span></Button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;