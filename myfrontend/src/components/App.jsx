import React, { useEffect, useState } from 'react';

const App = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://0.0.0.0:8000/')
        .then(res => res.json())
        .then(data => {
            setMessage(data["message"]);
        })
    }, []);

    return (
        <h1>{message}</h1>
    );
}

export default App;