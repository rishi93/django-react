import React, { useState } from 'react';

const Login = ({ setLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://0.0.0.0:8000/api-auth/", {
            method: 'POST',
            body: new URLSearchParams({
                username: username,
                password: password
            })
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data['token']);
            setLoggedIn(true);
        })
    }

    return (
        <section className="section">
            <div className="columns">
                <div className="column is-one-third is-offset-one-third">
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="text" 
                                    value={username} 
                                    onChange={handleUsername}>  
                                </input>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="password" 
                                    value={password}
                                    onChange={handlePassword}> 
                                </input>
                            </div>
                        </div>
                        <div className="field">
                            <button type="submit" className="button is-primary is-info">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;