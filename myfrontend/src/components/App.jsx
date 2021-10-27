import React, { useEffect, useState } from 'react';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(null);

    useEffect(() => {
        if(localStorage.getItem('token') !== null) {
            setLoggedIn(true);
        }
    });

    return (
        <>
            {loggedIn ? 
                <LoggedIn setLoggedIn={setLoggedIn}/> : 
                <LoggedOut setLoggedIn={setLoggedIn} />
            }
        </>
    );
}

export default App;