import React from 'react'
import { useHistory } from 'react-router-dom';

const Register = () => {
    const history = useHistory();

    function handleRegister() {
        alert('registered! please login')
        history.push("/login");
        location.reload();
    }

    return (
        <form aria-label="register">
            <label>
                <input type="text" placeholder="full name" />
            </label>
            <label>
                <input type="text" placeholder="username" />
            </label>
            <label>
                <input type="password" placeholder="password" />
            </label>
            <label>
                <input type="password" placeholder="confirm password" />
            </label>
            <div className="button-container">
                <button onClick={handleRegister}>Register</button>
            </div>
        </form>
    )
}

export default Register;