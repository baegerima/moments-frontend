import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/style.css'; // Импортируем Link для перехода по страницам

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [token, setToken] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
            setToken(response.data.token); // Сохранить токен
            alert('Login successful');
        } catch (error) {
            setErrorMessage(error.response?.data || 'Login failed');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div>
                <Link to="/reset-password">Forgot Password?</Link> {/* Ссылка на страницу восстановления пароля */}
            </div>
            {token && <div>Your token: {token}</div>}
        </div>
    );
};

export default Login;
