import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { Register } from '../../components'

const LandingPage = () => {
    const [registrationStatus, setRegistrationStatus] = useState(false);
    const history = useHistory();

    function handleLogin() {
        history.push("/home");
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