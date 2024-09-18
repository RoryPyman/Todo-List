import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import checkpassword from '../../backend/checkpassword';
import './index.css';

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Move useNavigate here

    const handleClick = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const isValid = await checkpassword(user, password);

        if (!isValid) {
            alert('Username and password do not match, please try again.');
        } else {
            navigate('/list', {state: {user}}); // Navigate to the route
        }
    };

    return (
        <div className='login-container'>
            <label>Username:</label>
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
            <button onClick={handleClick}>Login</button> {/* Use handleClick here */}
        </div>
    );
};

export default Login;
