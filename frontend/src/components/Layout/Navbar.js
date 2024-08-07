import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import './Navbar.css';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        navigate('/login');
    };

    const items = [
        {
            label: 'Login',
            icon: 'pi pi-fw pi-sign-in',
            command: () => { navigate('/login'); }
        },
        {
            label: 'Register',
            icon: 'pi pi-fw pi-user-plus',
            command: () => { navigate('/register'); }
        },
    ];

    if (isAuthenticated) {
        items.push({
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            command: () => { navigate('/dashboard'); }
        });
    }

    return (
        <div className="navbar">
            <Menubar model={items} end={isAuthenticated && <Button label="Logout" icon="pi pi-power-off" onClick={handleLogout} />} />
        </div>
    );
};

export default Navbar;
