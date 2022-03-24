import React from 'react'
import "../style/Login.css"
import logo from '../assets/logo.svg'

const Login = () => {
    return (
        <div className="login">
        <img src="logo" alt="logo image " />
        <form>
            <label>
                <p>Username</p>
                <input type="text" width="340" />
            </label>
            <label>
                <p>Password</p>
                <input type="text"/>
            </label>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
        </div>
    )
}

export default Login
