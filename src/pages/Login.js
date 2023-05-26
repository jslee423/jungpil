import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { CircularProgress } from '@mui/material';
import { useAuth } from '../firebase/auth';
import './Login.scss';

const Login = () => {
    const { authUser, isLoading } = useAuth();
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            setErr(true);
        }
    };

    useEffect(() => {
        if (!isLoading && authUser) {
            navigate('/admin');
        }
    }, [authUser, isLoading]);

    return (
        (isLoading || (!isLoading && !!authUser)) ?
        <CircularProgress color="inherit" sx={{ margin: 'auto' }} />
        :
        <div className='login'>
            <span className='login-title'>ADMIN LOGIN</span>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='email' />
                <input type='password' placeholder="password" />
                <button>SIGN IN</button>
                {err && <div>Something went wrong</div>}
            </form>
        </div>
    );
};

export default Login;