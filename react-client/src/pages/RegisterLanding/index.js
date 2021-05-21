import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { Login, Register } from '../../components'

const RegisterLanding = () => {
    const [registrationStatus, setRegistrationStatus] = useState(false);
    const history = useHistory();

    function nav() {

        return (
            <nav role="navigation">
                <NavLink to='/login' activeClassName="current" onClick={() => { setRegistrationStatus(false) }}>Login</NavLink>
                <NavLink to='/register' activeClassName="current" onClick={() => { setRegistrationStatus(true) }}>Register</NavLink>
            </nav >
        );
    }

    return (
        <>
            <main id="login">
                
                <div className="landing-box">
                <h1>JobbaHunt</h1>
                {nav()}
                {registrationStatus ? <Login /> : <Register />}

                <div className="background"></div>
                </div>
            </main>
        </>
    )
}

export default RegisterLanding;