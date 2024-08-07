import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import './Auth.css';

const Login = ({ setIsAuthenticated }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { name, password });
            localStorage.setItem('authToken', res.data.token);
            setIsAuthenticated(true);
            navigate('/dashboard');
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <div className="auth-container">
            <Card title="Login" className="auth-card">
                <form onSubmit={handleSubmit} className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="username">Username</label>
                        <InputText id="username" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="p-field">
                        <label htmlFor="password">Password</label>
                        <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} required feedback={false} />
                    </div>
                    <Button type="submit" label="Login" className="p-mt-2" />
                </form>
            </Card>
        </div>
    );
};

export default Login;
