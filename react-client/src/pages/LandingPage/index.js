import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { Register, Login } from '../../components'

const LandingPage = () => {
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
                {registrationStatus ? <Register /> : <Login />}
                </div>
                
            </main>
        </>
    )
}

export default LandingPage;