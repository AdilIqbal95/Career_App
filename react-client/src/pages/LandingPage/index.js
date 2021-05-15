import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';

const LandingPage = () => {
    const [registrationStatus, setRegistrationStatus] = useState(false);
    const history = useHistory();

    function handleLogin() {
        history.push("/home");
    }

    function handleRegister() {
        alert('registered! please login')
        history.push("/login");
        location.reload();
    }

    function nav() {

        return (
            <nav role="navigation">
                <NavLink to='/login' activeClassName="current" onClick={loginClicked}>Login</NavLink>
                <NavLink to='/register' activeClassName="current" onClick={registerClicked}>Register</NavLink>
            </nav >
        );
    }

    function registerClicked() {
        setRegistrationStatus(true)
    }

    function loginClicked() {
        setRegistrationStatus(false)
    }

    function Login() {
        return (
            <form>
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

    function Register() {
        return (
            <form>
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

    return (
        <>
            <main id="login">
                {nav()}
                {registrationStatus ? <Register /> : <Login />}

                <div className="background"></div>

            </main>
        </>
    )
}

export default LandingPage;