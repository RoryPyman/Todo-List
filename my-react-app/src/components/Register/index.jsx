import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { userInDatabase } from '../../backend/register'
import { auth } from '../../../public/configuration'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import './index.css'

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent default form submission
        createUserWithEmailAndPassword(auth, email, password)
        .then( userCredentials => {
            console.log("Succesfully registered: ", userCredentials.user.uid)
            navigate('/list', { state: { user: userCredentials.user.uid } });
        }).catch( e => {
            console.log(e)
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
        </div>
    );
}

export default Register