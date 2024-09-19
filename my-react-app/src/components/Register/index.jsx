import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import register from '../../backend/register'
import './index.css'

const Register = () => {
    const navigate = useNavigate();
    const handleRegister = async () => {
        if (user == "" || password == "") {
            alert("Username and Password fields must not be empty.")
            return
        }
        const res = await register(user, password)
        if (res) {
            navigate('/list', {state: {user}});
        }
        else {
            alert("Creating an account failed, Please try again")
        }
    }

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    return (
    <div className='registerDiv'>
            <label>Username:</label>
            <input
                type='text'
                className='username-field'
                value={user}
                onChange={e => setUser(e.target.value)}
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
            <button onClick={() => handleRegister()}>Register</button> {/* Use handleClick here */}
        </div>
    );
}

export default Register