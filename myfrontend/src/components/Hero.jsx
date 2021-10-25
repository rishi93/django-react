import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [message, setMessage] = useState('Hello!');

    useEffect(() => {
        fetch('http://0.0.0.0:8000/')
        .then(res => res.json())
        .then(data => {
            setMessage(data['message']);
        })
    }, []);

    return (
        <section className="hero is-info">
            <div className="hero-body">
                <h1 className="title">
                    {message}
                </h1>
            </div>
        </section>
    );
}

export default Hero;