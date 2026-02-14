// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this file contains the necessary styles

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <img src="/images/logo.png" alt="CalmCompass Logo" className="logo-image" />
                <span className="company-name">Calm Compass</span>
            </Link>
            <ul className="navbar-links">
                <li><Link to="/mood-tracker">Mood Tracker</Link></li>
                <li><Link to="/affirmations">Affirmations</Link></li>
                <li><Link to="/meditation">Meditation</Link></li>
                <li><Link to="/self-assessment">Self Assessment</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
