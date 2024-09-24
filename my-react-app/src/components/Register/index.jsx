import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { errorMessages } from '../../assets/errors';
import { auth } from '../../../public/configuration'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import './index.css'

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleRegister = async (e) => {
        setError("");
        e.preventDefault(); // Prevent default form submission
        createUserWithEmailAndPassword(auth, email, password)
        .then( userCredentials => {
            navigate('/list', { state: { user: userCredentials.user.uid } });
        }).catch( e => {
            setError(errorMessages[e.code])
        })
    }

    return (
    <div className='registerDiv'>
            <label>Email:</label>
            <input
                type='text'
                className='username-field'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <br />
            <label>Password:</label>
            <input
                type='password'
                className='password-field'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleRegister}>Register</button> {/* Use handleClick here */}
            <div className='errorMessage'>
                <label className='error'>{error}</label>
            </div>
        </div>
    );
}

export default Register