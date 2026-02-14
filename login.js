// src/components/Login.js

import React, { useState } from 'react';
import './login.css';

function Login({ onLogin }) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { username, password } = formData;

        // Simulate a login (In a real app, you'd validate this with a backend service)
        if (username === 'testuser' && password === 'password') {
            onLogin(); // Notify the Home component that login is successful
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <img src="/images/logo.png" alt="CalmCompass Logo" className="logo-image"/>
                <h2>Login to Cloud Compass</h2>
                <form onSubmit={handleSubmit}>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
