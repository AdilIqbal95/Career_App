import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

const Header = () => {

    let match = useRouteMatch();

    return (
        <nav role="navigation">
            <NavLink exact to={`${match.url}/jobs`} activeClassName="current">My Jobs 💼</NavLink>
            <NavLink to={`${match.url}/search`} activeClassName="current">Search 🔍</NavLink>
            <NavLink to={`${match.url}/jobbahut`} activeClassName="current">JobbaHut 🛍</NavLink>
        </nav >
    );
}

export default Header;
