import React from 'react';
import googleLogo from '../../../Images/social/google-logo.png';
import fbLogo from '../../../Images/social/facebook-logo.jpg';
import gitLogo from '../../../Images/social/github-logo.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if(loading || loading1){
        return <Loading></Loading>
    }

    if (error || error1) {

        errorElement =
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>


    }

    if (user || user1) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>
                    or
                </p>
                <div style={{ height: '1px' }} className='bg-primary w-50'> </div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={googleLogo} alt='logo-img'></img>
                    <span className='px-2'> Google Sign In</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={fbLogo} alt='logo-img'></img>
                    <span className='px-2'> Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={gitLogo} alt='logo-img'></img>
                    <span className='px-2'> GitHub Sign In</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;