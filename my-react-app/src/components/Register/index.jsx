import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { errorMessages } from '../../assets/errors';
import { auth } from '../../../public/configuration'
import { createUserWithEmailAndPassword } from 'firebase/auth';
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
    <form className='registerDiv' onSubmit={handleRegister}>
        <h3>Register</h3>
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
            <button type='submit'>Register</button> {/* Use handleClick here */}
            {/* Conditionally render the error div only when there's an error */}
            {error && (
                <div className='error-div'>
                    <label className='error-message'>{error}</label>
                </div>
            )}
        </form>
    );
}

export default Register