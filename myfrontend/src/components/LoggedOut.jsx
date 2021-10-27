import React from 'react';
import Hero from './Hero';
import Login from './Login';

const LoggedOut = () => {
    return (
        <>
            <Hero message="You're logged out!" />
            <Login />
        </>
    );
}

export default LoggedOut;