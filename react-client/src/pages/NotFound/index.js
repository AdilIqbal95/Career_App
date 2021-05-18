import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();

    return (
        <>
            <header id="not-found">
                <h1>🧐 Oops!</h1>
                <h5>...can't find {history.location.pathname}! Go to <a href="/home">Home</a> or <a href="/login">Login</a>?</h5>
            </header>
        </>
    )
}

export default NotFound;