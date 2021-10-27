import React from 'react';

const Hero = ({ message }) => {

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