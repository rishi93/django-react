import React from 'react';
import Hero from './Hero';

const LoggedIn = ({ setLoggedIn }) => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
    }

    return (
        <>
            <Hero message="You're logged in!" />
            <button 
                className="button is-info"
                onClick={handleLogout}
            >
                    Logout
            </button>
        </>
    );
}

export default LoggedIn;