import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/image.png';
import loginPageImage from '../assets/authPageSide.png';
import '../CSS/SignUp.css';

function SignUp() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [state, setState] = useState('Login');

    const navigate = useNavigate();

    const login = async () => {
        console.log("Login function executed");

        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const responseData = await response.json();

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            navigate('/');  // Use useNavigate instead of window.location.replace
        } else {
            alert(responseData.message);
        }
    };

    const signup = async () => {
        console.log("Signup function executed");

        const response = await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, name, email, password }),
        });

        const responseData = await response.json();

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            navigate('/');
        } else {
            alert(responseData.message);
        }
    };

    return (
        <div className='signup'>
            <div className="signup-left">
                <h1>{state}</h1>
                <hr />
                <img src={logo} alt='' />
                <form onSubmit={(e) => { e.preventDefault(); state === 'Login' ? login() : signup(); }}>
                    {state === 'Sign Up' && (
                        <>
                            <div className="inputBox">
                                <input required onChange={(e) => setUsername(e.target.value)} value={username} type='text' placeholder='Username' />
                            </div>
                            <div className="inputBox">
                                <input required onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Name' />
                            </div>
                        </>
                    )}

                    <div className="inputBox">
                        <input required onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email' />
                    </div>

                    <div className="inputBox">
                        <input required onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' />
                    </div>

                    {state === 'Sign Up' ? (
                        <p>Already have an account? <Link onClick={() => setState("Login")}>Login</Link></p>
                    ) : (
                        <p>Create account? <Link onClick={() => setState('Sign Up')}>Sign Up</Link></p>
                    )}

                    <button type='submit' className='signup-btn'>{state}</button>
                </form>
            </div>

            <div className="signup-right">
                <img src={loginPageImage} alt='' />
            </div>
        </div>
    );
}

export default SignUp;
