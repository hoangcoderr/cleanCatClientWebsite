import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // Mock data for demonstration
    const recentActions = [
        {
            id: 1,
            action: "User banned",
            details: "Banned user 'hacker123' for using unauthorized mods",
            timestamp: "2 hours ago"
        },
        {
            id: 2,
            action: "Update published",
            details: "Published v1.1.1 hotfix update",
            timestamp: "5 hours ago"
        },
        {
            id: 3,
            action: "Support ticket resolved",
            details: "Resolved payment issue for order #CC-1234",
            timestamp: "1 day ago"
        }
    ];

    const users = [
        {
            id: 1,
            username: "Player123",
            email: "player123@example.com",
            status: "active",
            joinDate: "2023-01-15",
            type: "premium"
        },
        {
            id: 2,
            username: "GameMaster",
            email: "gamemaster@example.com",
            status: "banned",
            joinDate: "2023-02-20",
            type: "basic"
        }
    ];

    const orders = [
        {
            id: "CC-1234",
            user: "Player123",
            amount: 19.99,
            status: "completed",
            date: "2023-03-15"
        },
        {
            id: "CC-1235",
            user: "GameMaster",
            amount: 29.99,
            status: "pending",
            date: "2023-03-16"
        }
    ];

    return (
        <div className="container py-5">
            <div className="admin-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Admin Header */}
                <div className="minecraft-panel mb-4">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="minecraft-title diamond mb-2">Admin Dashboard</h1>
                            <p className="text-muted mb-0">Manage your CleanCatClient community</p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <div className="d-flex justify-content-md-end align-items-center">
                                <span className="badge bg-danger me-2">Admin</span>
                                <span className="text-muted">Last login: 2 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="row mb-4">
                    <div className="col-md-3 mb-3">
                        <div className="minecraft-panel h-100">
                            <h3 className="minecraft-title gold">1,234</h3>
                            <p className="mb-0">Total Users</p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="minecraft-panel h-100">
                            <h3 className="minecraft-title emerald">$4,321</h3>
                            <p className="mb-0">Monthly Revenue</p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="minecraft-panel h-100">
                            <h3 className="minecraft-title diamond">156</h3>
                            <p className="mb-0">Active Support Tickets</p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="minecraft-panel h-100">
                            <h3 className="minecraft-title redstone">15</h3>
                            <p className="mb-0">Reported Issues</p>
                        </div>
                    </div>
                </div>

                {/* Admin Navigation */}
                <div className="minecraft-panel mb-4">
                    <div className="d-flex flex-wrap">
                        <div 
                            className={`admin-nav-item ${activeTab === 'overview' ? 'active' : ''}`}
                            onClick={() => setActiveTab('overview')}
                            style={{ padding: '10px 20px', cursor: 'pointer' }}
                        >
                            Overview
                        </div>
                        <div 
                            className={`admin-nav-item ${activeTab === 'users' ? 'active' : ''}`}
                            onClick={() => setActiveTab('users')}
                            style={{ padding: '10px 20px', cursor: 'pointer' }}
                        >
                            Users
                        </div>
                        <div 
                            className={`admin-nav-item ${activeTab === 'orders' ? 'active' : ''}`}
                            onClick={() => setActiveTab('orders')}
                            style={{ padding: '10px 20px', cursor: 'pointer' }}
                        >
                            Orders
                        </div>
                        <div 
                            className={`admin-nav-item ${activeTab === 'updates' ? 'active' : ''}`}
                            onClick={() => setActiveTab('updates')}
                            style={{ padding: '10px 20px', cursor: 'pointer' }}
                        >
                            Updates
                        </div>
                        <div 
                            className={`admin-nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                            onClick={() => setActiveTab('settings')}
                            style={{ padding: '10px 20px', cursor: 'pointer' }}
                        >
                            Settings
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="admin-content">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div className="row">
                            <div className="col-md-8 mb-4">
                                <div className="minecraft-panel h-100">
                                    <h3 className="mb-4">Recent Actions</h3>
                                    <div className="list-group">
                                        {recentActions.map(action => (
                                            <div key={action.id} className="list-group-item bg-transparent text-white border-0">
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1">{action.action}</h5>
                                                    <small>{action.timestamp}</small>
                                                </div>
                                                <p className="mb-1">{action.details}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="minecraft-panel h-100">
                                    <h3 className="mb-4">Quick Actions</h3>
                                    <div className="d-grid gap-2">
                                        <button className="minecraft-btn primary">Publish Update</button>
                                        <button className="minecraft-btn secondary">View Reports</button>
                                        <button className="minecraft-btn danger">Emergency Shutdown</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Users Tab */}
                    {activeTab === 'users' && (
                        <div className="minecraft-panel">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h3 className="mb-0">User Management</h3>
                                <button className="minecraft-btn primary">Add New User</button>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-dark table-hover">
                                    <thead>
                                        <tr>
                                            <th>Username</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th>Join Date</th>
                                            <th>Type</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map(user => (
                                            <tr key={user.id}>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    <span className={`badge bg-${user.status === 'active' ? 'success' : 'danger'}`}>
                                                        {user.status}
                                                    </span>
                                                </td>
                                                <td>{user.joinDate}</td>
                                                <td>{user.type}</td>
                                                <td>
                                                    <button className="btn btn-sm btn-primary me-2">Edit</button>
                                                    <button className="btn btn-sm btn-danger">Ban</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Orders Tab */}
                    {activeTab === 'orders' && (
                        <div className="minecraft-panel">
                            <h3 className="mb-4">Order Management</h3>
                            <div className="table-responsive">
                                <table className="table table-dark table-hover">
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>User</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map(order => (
                                            <tr key={order.id}>
                                                <td>{order.id}</td>
                                                <td>{order.user}</td>
                                                <td>${order.amount}</td>
                                                <td>
                                                    <span className={`badge bg-${order.status === 'completed' ? 'success' : 'warning'}`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td>{order.date}</td>
                                                <td>
                                                    <button className="btn btn-sm btn-primary me-2">View</button>
                                                    <button className="btn btn-sm btn-danger">Refund</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Updates Tab */}
                    {activeTab === 'updates' && (
                        <div className="minecraft-panel">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h3 className="mb-0">Update Management</h3>
                                <button className="minecraft-btn primary">Create New Update</button>
                            </div>
                            <div className="version-list">
                                <div className="version-item minecraft-panel mb-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h4 className="mb-1">Version 1.1.0</h4>
                                            <p className="mb-0 text-muted">Released: March 10, 2023</p>
                                        </div>
                                        <div>
                                            <button className="minecraft-btn secondary me-2">Edit</button>
                                            <button className="minecraft-btn danger">Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="version-item minecraft-panel mb-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h4 className="mb-1">Version 1.0.1</h4>
                                            <p className="mb-0 text-muted">Released: February 1, 2023</p>
                                        </div>
                                        <div>
                                            <button className="minecraft-btn secondary me-2">Edit</button>
                                            <button className="minecraft-btn danger">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Settings Tab */}
                    {activeTab === 'settings' && (
                        <div className="minecraft-panel">
                            <h3 className="mb-4">Admin Settings</h3>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Site Maintenance Mode</label>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="maintenanceMode" />
                                        <label className="form-check-label" htmlFor="maintenanceMode">Enable maintenance mode</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Admin Email Notifications</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="notifyNewUsers" />
                                        <label className="form-check-label" htmlFor="notifyNewUsers">New user registrations</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="notifyNewOrders" />
                                        <label className="form-check-label" htmlFor="notifyNewOrders">New orders</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="notifyReports" />
                                        <label className="form-check-label" htmlFor="notifyReports">User reports</label>
                                    </div>
                                </div>
                                <button type="submit" className="minecraft-btn primary">Save Settings</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin; 