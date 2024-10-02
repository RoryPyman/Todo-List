import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { errorMessages } from '../../assets/errors';
import { auth } from '../../../public/configuration'
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Move useNavigate here

    const handleClick = async (e) => {
        e.preventDefault(); // Prevent default form submission

        signInWithEmailAndPassword(auth, user, password)
        .then( userCredentials => {
            navigate('/list', { state: { user: userCredentials.user.uid } });
        }).catch( e => {
            setError(errorMessages[e.code])
        })
    };

    return (
        <div className='login-container'>
            <h3>Login</h3>
            <form onSubmit={handleClick}>
                <label>Email:</label>
                <input
                    type='text'
                    className='username-field'
                    value={user}
                    onChange={e => setUser(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type='password'
                    className='password-field'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" onClick={handleClick}>Login</button> {/* Use handleClick here */}
            </form>
            <div className='errorMessage'>
                <label className='error'>{error}</label>
            </div>
        </div>
    );
};

export default Login;
