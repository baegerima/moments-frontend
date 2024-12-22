import React, { useState } from 'react';
import axios from 'axios';
import '../styles/style.css';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/reset-password', { email });
            setMessage(response.data); // Сообщение об успешном отправлении письма
        } catch (error) {
            setMessage(error.response?.data || 'Error sending password reset email');
        }
    };

    return (
        <div>
            <h1>Reset Password</h1>
            {message && <div>{message}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email to reset password"
                    />
                </div>
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
};

export default ResetPassword;
