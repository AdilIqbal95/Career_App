import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav role="navigation">
            <NavLink exact to="/jobs" activeClassName="current">My Jobs 💼</NavLink>
            <NavLink to="/search" activeClassName="current">Search 🔍</NavLink>
            <NavLink to="/jobbashop" activeClassName="current">JobbaHut 🛍</NavLink>
        </nav >
    );
}

export default Header;
