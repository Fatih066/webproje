import './Register.css'
import {Link} from 'react-router-dom'

export default function Register() {
  return (
    <div className='register'> 
    <span className='registerTitle'>register</span>
    <form className="registerForm">
    <label>Username</label>
        <input className='registerInput' type='text' placeholder='Username your email...'></input>
        <label>Email</label>
        <input className='registerInput' type='text' placeholder='Enter your email...'></input>
        <label>Password</label>
        <input className='registerInput' type='password' placeholder='Password your email...'></input>
        <button className="registerButton">register</button>
    </form>
    <button className="registerLoginButton">
    <Link className='link' to="/login">Login</Link>

    </button>
    </div>
  )
}
