import React, { useState } from 'react';
import axios from 'axios';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import './Auth.css';

const Register = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', { name, password });
            console.log(res.data);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <div className="auth-container">
            <Card title="Register" className="auth-card">
                <form onSubmit={handleSubmit} className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="username">Username</label>
                        <InputText id="username" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="p-field">
                        <label htmlFor="password">Password</label>
                        <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} required feedback={false} />
                    </div>
                    <Button type="submit" label="Register" className="p-mt-2" />
                </form>
            </Card>
        </div>
    );
};

export default Register;
