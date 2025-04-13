import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDiscord, FaGithub } from 'react-icons/fa';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false
    });

    const [passwordStrength, setPasswordStrength] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('Registration data:', formData);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (name === 'password') {
            calculatePasswordStrength(value);
        }
    };

    const calculatePasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength += 25;
        if (password.match(/[A-Z]/)) strength += 25;
        if (password.match(/[0-9]/)) strength += 25;
        if (password.match(/[^A-Za-z0-9]/)) strength += 25;
        setPasswordStrength(strength);
    };

    const getPasswordStrengthColor = () => {
        if (passwordStrength <= 25) return '#FF4444';
        if (passwordStrength <= 50) return '#FFBB33';
        if (passwordStrength <= 75) return '#00C851';
        return '#007E33';
    };

    return (
        <div className="container">
            <div className="register-container">
                <div className="register-header">
                    <h2 className="mb-0">Create an Account</h2>
                </div>
                <div className="register-body">
                    <form id="register-form" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="minecraft-input form-control"
                                id="username"
                                name="username"
                                placeholder="Choose a username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                            <small id="username-availability" className="form-text"></small>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="minecraft-input form-control"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
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
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <div className="password-strength-container">
                                <div 
                                    className="password-strength-meter"
                                    style={{
                                        width: `${passwordStrength}%`,
                                        backgroundColor: getPasswordStrengthColor()
                                    }}
                                ></div>
                            </div>
                            <small className="form-text text-muted">Password must be at least 8 characters long</small>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                className="minecraft-input form-control"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="minecraft-checkbox">
                                I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
                                <input
                                    type="checkbox"
                                    name="terms"
                                    checked={formData.terms}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="minecraft-btn primary auth-btn">
                                Register
                            </button>
                        </div>
                        <div className="text-center mt-4">
                            <p>Already have an account? <Link to="/login">Login here</Link></p>
                        </div>
                    </form>
                    
                    <div className="mt-5">
                        <p className="text-center mb-3">Or register with:</p>
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

export default Register; 