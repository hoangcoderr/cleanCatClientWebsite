import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDiscord, FaGithub } from 'react-icons/fa';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        remember: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login data:', formData);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="container">
            <div className="login-container">
                <div className="login-header">
                    <h2 className="mb-0">Login to CleanCatClient</h2>
                </div>
                <div className="login-body">
                    <form id="login-form" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="minecraft-input form-control"
                                id="username"
                                name="username"
                                placeholder="Enter your username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="minecraft-input form-control"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 form-check">
                            <label className="minecraft-checkbox">
                                Remember me
                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={handleChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="minecraft-btn primary auth-btn">
                                Login
                            </button>
                        </div>
                        <div className="text-center mt-4">
                            <p>Don't have an account? <Link to="/register">Register here</Link></p>
                            <p><Link to="/forgot-password">Forgot your password?</Link></p>
                        </div>
                    </form>
                    
                    <div className="mt-5">
                        <div className="row">
                            <div className="col-6">
                                <button className="minecraft-btn w-100 mb-3" style={{ backgroundColor: '#7289DA' }}>
                                    <FaDiscord className="me-2" /> Discord
                                </button>
                            </div>
                            <div className="col-6">
                                <button className="minecraft-btn w-100 mb-3" style={{ backgroundColor: '#24292e' }}>
                                    <FaGithub className="me-2" /> GitHub
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login; 