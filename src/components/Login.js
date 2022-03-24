import React from 'react'
import "../style/Login.css"

const Login = () => {
    return (
        <div className="login">
        <img src="" alt="logo" />
        <form>
            <label>
                <p>Username</p>
                <input type="text"/>
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
