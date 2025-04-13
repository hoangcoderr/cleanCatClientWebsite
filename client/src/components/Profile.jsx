import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('tab-overview');
    const [profileForm, setProfileForm] = useState({
        username: 'Player123',
        email: 'player@example.com',
        displayName: 'Player123',
        bio: 'Minecraft enthusiast and CleanCatClient user!'
    });
    const [passwordForm, setPasswordForm] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [settings, setSettings] = useState({
        emailNotifications: true,
        autoDownloadUpdates: false,
        publicProfile: true
    });

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        // Implementation would connect to backend
        console.log('Profile updated:', profileForm);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        // Implementation would connect to backend
        console.log('Password changed');
    };

    const handleSettingChange = (setting) => {
        setSettings(prev => ({
            ...prev,
            [setting]: !prev[setting]
        }));
    };

    return (
        <div className="container py-5">
            <div className="profile-container">
                {/* Profile Header */}
                <div className="profile-header mb-4">
                    <div className="row">
                        <div className="col-md-2 col-4 mb-3 mb-md-0">
                            <div className="profile-avatar">
                                <img src="https://images.unsplash.com/photo-1634580285846-374f22b48c7d" alt="Profile Avatar" className="img-fluid pixelated" />
                                <div className="edit-avatar">
                                    <i className="fas fa-pen"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 col-8">
                            <h2>{profileForm.username}</h2>
                            <p className="text-muted">Member since January 15, 2023</p>
                            <div className="d-flex align-items-center">
                                <span className="badge bg-success me-2">Premium User</span>
                                <span className="badge bg-primary me-2">Verified</span>
                            </div>
                            
                            <div className="profile-stats">
                                <div className="stat-item">
                                    <div className="stat-value">3</div>
                                    <div className="stat-label">Purchases</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-value">7</div>
                                    <div className="stat-label">Downloads</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-value">5</div>
                                    <div className="stat-label">Achievements</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-value">2</div>
                                    <div className="stat-label">Support Tickets</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Profile Navigation */}
                <div className="profile-nav mb-4">
                    <div 
                        className={`profile-nav-item ${activeTab === 'tab-overview' ? 'active' : ''}`}
                        onClick={() => handleTabChange('tab-overview')}
                    >
                        Overview
                    </div>
                    <div 
                        className={`profile-nav-item ${activeTab === 'tab-purchases' ? 'active' : ''}`}
                        onClick={() => handleTabChange('tab-purchases')}
                    >
                        Purchases
                    </div>
                    <div 
                        className={`profile-nav-item ${activeTab === 'tab-achievements' ? 'active' : ''}`}
                        onClick={() => handleTabChange('tab-achievements')}
                    >
                        Achievements
                    </div>
                    <div 
                        className={`profile-nav-item ${activeTab === 'tab-settings' ? 'active' : ''}`}
                        onClick={() => handleTabChange('tab-settings')}
                    >
                        Settings
                    </div>
                    <div 
                        className={`profile-nav-item ${activeTab === 'tab-support' ? 'active' : ''}`}
                        onClick={() => handleTabChange('tab-support')}
                    >
                        Support
                    </div>
                </div>
                
                {/* Profile Content */}
                <div className="profile-content">
                    {/* Overview Tab */}
                    {activeTab === 'tab-overview' && (
                        <div id="tab-overview" className="tab-content active">
                            <h3 className="mb-4">Account Overview</h3>
                            
                            <div className="row mb-4">
                                <div className="col-md-6 mb-4 mb-md-0">
                                    <div className="minecraft-panel h-100">
                                        <h4>Recent Activity</h4>
                                        <div className="list-group">
                                            <div className="list-group-item bg-transparent text-white border-0 ps-0">
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1">Purchased Premium Package</h5>
                                                    <small>3 days ago</small>
                                                </div>
                                                <p className="mb-1">You purchased the Premium Package for $19.99</p>
                                            </div>
                                            <div className="list-group-item bg-transparent text-white border-0 ps-0">
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1">Downloaded v1.1.0</h5>
                                                    <small>5 days ago</small>
                                                </div>
                                                <p className="mb-1">You downloaded CleanCatClient version 1.1.0</p>
                                            </div>
                                            <div className="list-group-item bg-transparent text-white border-0 ps-0">
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1">Achievement Unlocked</h5>
                                                    <small>1 week ago</small>
                                                </div>
                                                <p className="mb-1">You earned the "Early Adopter" achievement</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="minecraft-panel h-100">
                                        <h4>Account Information</h4>
                                        <table className="table table-dark table-transparent">
                                            <tbody>
                                                <tr>
                                                    <td>Username</td>
                                                    <td>{profileForm.username}</td>
                                                </tr>
                                                <tr>
                                                    <td>Email</td>
                                                    <td>{profileForm.email}</td>
                                                </tr>
                                                <tr>
                                                    <td>Account Type</td>
                                                    <td>Premium</td>
                                                </tr>
                                                <tr>
                                                    <td>Subscription</td>
                                                    <td>Active (Renews on Jan 15, 2024)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button className="minecraft-btn secondary btn-sm mt-2">Edit Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Settings Tab */}
                    {activeTab === 'tab-settings' && (
                        <div id="tab-settings" className="tab-content active">
                            <h3 className="mb-4">Account Settings</h3>
                            
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="minecraft-panel h-100">
                                        <h4>Profile Information</h4>
                                        <form id="profile-form" className="profile-form" onSubmit={handleProfileSubmit}>
                                            <div className="form-group">
                                                <label className="form-label">Username</label>
                                                <input 
                                                    type="text" 
                                                    className="minecraft-input form-control" 
                                                    value={profileForm.username}
                                                    disabled
                                                />
                                                <small className="text-muted">Username cannot be changed</small>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Email</label>
                                                <input 
                                                    type="email" 
                                                    className="minecraft-input form-control" 
                                                    value={profileForm.email}
                                                    onChange={(e) => setProfileForm({...profileForm, email: e.target.value})}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Display Name</label>
                                                <input 
                                                    type="text" 
                                                    className="minecraft-input form-control" 
                                                    value={profileForm.displayName}
                                                    onChange={(e) => setProfileForm({...profileForm, displayName: e.target.value})}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Bio</label>
                                                <textarea 
                                                    className="minecraft-input form-control" 
                                                    rows="3"
                                                    value={profileForm.bio}
                                                    onChange={(e) => setProfileForm({...profileForm, bio: e.target.value})}
                                                ></textarea>
                                            </div>
                                            <button type="submit" className="minecraft-btn primary">Save Changes</button>
                                        </form>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 mb-4">
                                    <div className="minecraft-panel h-100">
                                        <h4>Change Password</h4>
                                        <form id="password-form" onSubmit={handlePasswordSubmit}>
                                            <div className="form-group">
                                                <label className="form-label">Current Password</label>
                                                <input 
                                                    type="password" 
                                                    className="minecraft-input form-control" 
                                                    value={passwordForm.currentPassword}
                                                    onChange={(e) => setPasswordForm({...passwordForm, currentPassword: e.target.value})}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">New Password</label>
                                                <input 
                                                    type="password" 
                                                    className="minecraft-input form-control" 
                                                    value={passwordForm.newPassword}
                                                    onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Confirm New Password</label>
                                                <input 
                                                    type="password" 
                                                    className="minecraft-input form-control" 
                                                    value={passwordForm.confirmPassword}
                                                    onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
                                                />
                                            </div>
                                            <button type="submit" className="minecraft-btn primary">Change Password</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="minecraft-panel mt-4">
                                <h4 className="mb-4">Preferences</h4>
                                
                                <div className="settings-option">
                                    <div>
                                        <h5 className="mb-1">Email Notifications</h5>
                                        <p className="mb-0 text-muted">Receive emails about updates and offers</p>
                                    </div>
                                    <label className="toggle-switch">
                                        <input 
                                            type="checkbox" 
                                            checked={settings.emailNotifications}
                                            onChange={() => handleSettingChange('emailNotifications')}
                                        />
                                        <span className="toggle-slider"></span>
                                    </label>
                                </div>
                                
                                <div className="settings-option">
                                    <div>
                                        <h5 className="mb-1">Auto-Download Updates</h5>
                                        <p className="mb-0 text-muted">Automatically download new versions</p>
                                    </div>
                                    <label className="toggle-switch">
                                        <input 
                                            type="checkbox" 
                                            checked={settings.autoDownloadUpdates}
                                            onChange={() => handleSettingChange('autoDownloadUpdates')}
                                        />
                                        <span className="toggle-slider"></span>
                                    </label>
                                </div>
                                
                                <div className="settings-option">
                                    <div>
                                        <h5 className="mb-1">Public Profile</h5>
                                        <p className="mb-0 text-muted">Allow others to view your profile</p>
                                    </div>
                                    <label className="toggle-switch">
                                        <input 
                                            type="checkbox" 
                                            checked={settings.publicProfile}
                                            onChange={() => handleSettingChange('publicProfile')}
                                        />
                                        <span className="toggle-slider"></span>
                                    </label>
                                </div>
                                
                                <div className="settings-option">
                                    <div>
                                        <h5 className="mb-1">Two-Factor Authentication</h5>
                                        <p className="mb-0 text-muted">Add an extra layer of security</p>
                                    </div>
                                    <button className="minecraft-btn secondary btn-sm">Enable</button>
                                </div>
                            </div>
                            
                            <div className="minecraft-panel mt-4">
                                <h4 className="mb-4 text-danger">Danger Zone</h4>
                                
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5>Delete Account</h5>
                                        <p className="mb-0 text-muted">This action cannot be undone</p>
                                    </div>
                                    <button className="minecraft-btn danger">Delete Account</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile; 