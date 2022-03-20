import { getAuth } from 'firebase/auth';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import {
    useHistory,
    useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
    const {user,googleSignin} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        googleSignin().then((result) => {
            history.push(redirect_url);
        });
    };
    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={handleGoogleSignIn} className='btn btn-warning'>Google Sign In</button>
        </div>
    );
};

export default Login;