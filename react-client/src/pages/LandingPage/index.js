import React from 'react';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
    const history = useHistory();

    function handleSubmit() {
        history.push("/home");
    }

    return (
        <>
            <header>
                <h1>Login or Register</h1>
                <button onClick={handleSubmit}>Login</button>
                
            </header>
        </>
    )
}

export default LandingPage;