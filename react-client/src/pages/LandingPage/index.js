import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { Register, Login } from '../../components'

const LandingPage = () => {
    const [registrationStatus, setRegistrationStatus] = useState(false);
    const history = useHistory();

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