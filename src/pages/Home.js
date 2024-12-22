import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
const Home = () => {
    return (
        <div>
            <h1>Welcome to Moments</h1>
            <p>Your personal diary and image journal.</p>
            <nav>
                <Link to="/register">Register</Link> | <Link to="/login">Login</Link> | <Link to="/entries">View Entries</Link>
            </nav>
        </div>
    );
};

export default Home;
