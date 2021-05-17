import React from 'react'
import { useHistory } from 'react-router-dom';   

const Login = () => {
    const history = useHistory();

    function handleLogin() {
        history.push("/home");
    }

    return (
        <form aria-label="login">
            <label>
                <input type="text" placeholder="username" />
            </label>
            <label>
                <input type="password" placeholder="password" />
            </label>
            <div className="button-container">
                <button onClick={handleLogin}>Login</button>
            </div>
        </form>
    )
}

export default Login