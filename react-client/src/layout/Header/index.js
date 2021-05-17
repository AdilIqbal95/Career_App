import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { useAuthContext } from "../../contexts/auth";

const Header = () => {
    const { currentUser } = useAuthContext();

    let match = useRouteMatch();

    return (
        <nav role="navigation">
            { !currentUser ?
                <h1>🔑 looks like you need to <a href="/">log in!</a></h1> :
                <>
                    <NavLink exact to={`${match.url}/jobs`} activeClassName="current">My Jobs 💼</NavLink>
                    <NavLink to={`${match.url}/search`} activeClassName="current">Search 🔍</NavLink>
                    <NavLink to={`${match.url}/jobbahut`} activeClassName="current">JobbaHut 🛍</NavLink>
                </>
            }
        </nav >
    );
}

export default Header;
