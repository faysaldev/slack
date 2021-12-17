import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { auth, provider } from '../firebase';
import { userData } from '../features/userSlice';

function Login() {

    const dispatch = useDispatch();

    const signupHandler =()=>{
        auth.signInWithPopup(provider).then(({user})=>{
            dispatch(userData({user}));
        });

    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="/logo.jpg" alt="" />

                <h1>Sign in to Fm Faysal</h1>
                <p>faysal-ins.netlify.app</p>
                <Button onClick={signupHandler}>Sign in With Google</Button>
            </div>
        </div>
    )
}

export default Login
