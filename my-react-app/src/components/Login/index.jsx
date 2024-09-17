import './index.css'

const Login = () => {
    return (
    <div>
        <label type="text">Username:</label>
        <input type='text' className='username-field' />
        <label type="text">Password:</label>
        <input type='text' className='password-field'/>
        <button onClick={this.goTo.bind(this)} ></button>
        <button onClick={() => handleLoad(document.querySelector('.username-field').value)}> Login </button>
    </div>)
}

export default Login