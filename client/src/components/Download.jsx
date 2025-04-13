import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Download = () => {
    const [downloadProgress, setDownloadProgress] = useState(0);
    const [selectedMirror, setSelectedMirror] = useState('primary');
    const [showProgress, setShowProgress] = useState(false);

    const versions = [
        {
            version: "v1.1.0",
            date: "March 10, 2023",
            isRecommended: true,
            features: [
                "New cosmetic options",
                "Performance improvements",
                "Enhanced mod compatibility",
                "Custom hotkeys"
            ]
        },
        {
            version: "v1.0.1",
            date: "February 1, 2023",
            features: [
                "Fixed memory leak",
                "Improved chunk loading",
                "Fixed compatibility issues",
                "UI improvements"
            ]
        },
        {
            version: "v1.0.0",
            date: "January 15, 2023",
            features: [
                "Performance optimizations",
                "HUD customization",
                "Custom keybindings",
                "Screenshot manager"
            ]
        }
    ];

    const stats = {
        totalDownloads: "150,000+",
        latestVersion: "v1.1.0",
        lastUpdated: "March 10, 2023",
        activeUsers: "25,000+"
    };

    const handleDownload = (version) => {
        setShowProgress(true);
        setDownloadProgress(0);

        // Simulate download progress
        const interval = setInterval(() => {
            setDownloadProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setShowProgress(false);
                        setDownloadProgress(0);
                        showDownloadComplete(version);
                    }, 1000);
                    return 100;
                }
                return prev + Math.random() * 10;
            });
        }, 200);
    };

    const showDownloadComplete = (version) => {
        // Implementation would depend on your notification system
        console.log(`Download complete for ${version}`);
    };

    return (
        <div className="container py-5">
            <div className="download-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div className="text-center mb-5">
                    <h1 className="minecraft-title diamond mb-4">Download CleanCatClient</h1>
                    <p className="lead mb-5">Get the latest version of CleanCatClient and enhance your Minecraft experience with improved performance and features.</p>
                </div>

                {/* Download Statistics */}
                <div className="minecraft-panel mb-5">
                    <h3 className="mb-4">Download Statistics</h3>
                    <div className="row text-center">
                        <div className="col-md-3 mb-3">
                            <h3 className="minecraft-title gold">{stats.totalDownloads}</h3>
                            <p className="mb-0">Total Downloads</p>
                        </div>
                        <div className="col-md-3 mb-3">
                            <h3 className="minecraft-title emerald">{stats.latestVersion}</h3>
                            <p className="mb-0">Latest Version</p>
                        </div>
                        <div className="col-md-3 mb-3">
                            <h3 className="minecraft-title diamond">{stats.lastUpdated}</h3>
                            <p className="mb-0">Last Updated</p>
                        </div>
                        <div className="col-md-3 mb-3">
                            <h3 className="minecraft-title redstone">{stats.activeUsers}</h3>
                            <p className="mb-0">Active Users</p>
                        </div>
                    </div>
                </div>

                {/* Version Cards */}
                <div className="row">
                    {versions.map((ver, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className={`minecraft-panel h-100 ${ver.isRecommended ? 'border-gold' : ''}`}>
                                {ver.isRecommended && (
                                    <div className="position-absolute top-0 end-0 bg-gold text-dark px-3 py-1">
                                        RECOMMENDED
                                    </div>
                                )}
                                <div className="d-flex mb-3">
                                    <i className="fab fa-windows me-2"></i>
                                    <i className="fab fa-apple me-2"></i>
                                    <i className="fab fa-linux"></i>
                                </div>
                                <h3 className="minecraft-title gold mb-2">{ver.version}</h3>
                                <p className="text-muted mb-3">Released: {ver.date}</p>
                                <ul className="list-unstyled mb-4">
                                    {ver.features.map((feature, i) => (
                                        <li key={i} className="mb-2">✓ {feature}</li>
                                    ))}
                                </ul>
                                <button 
                                    className="minecraft-btn primary w-100"
                                    onClick={() => handleDownload(ver.version)}
                                >
                                    Download {ver.version}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Download Progress */}
                {showProgress && (
                    <div className="minecraft-panel mt-4">
                        <h3 className="mb-3">Download in Progress</h3>
                        <div className="progress minecraft-progress">
                            <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{ width: `${Math.round(downloadProgress)}%` }}
                                aria-valuenow={Math.round(downloadProgress)} 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >
                                {Math.round(downloadProgress)}%
                            </div>
                        </div>
                    </div>
                )}

                {/* Download Mirrors */}
                <div className="minecraft-panel mt-4">
                    <h3 className="mb-4">Download Mirrors</h3>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div 
                                className={`minecraft-panel p-3 cursor-pointer ${selectedMirror === 'primary' ? 'border-gold' : ''}`}
                                onClick={() => setSelectedMirror('primary')}
                            >
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="mb-1">Primary Server (US)</h5>
                                        <p className="mb-0 text-muted">Recommended for users in North America</p>
                                    </div>
                                    {selectedMirror === 'primary' && (
                                        <i className="fas fa-check-circle text-success"></i>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div 
                                className={`minecraft-panel p-3 cursor-pointer ${selectedMirror === 'eu' ? 'border-gold' : ''}`}
                                onClick={() => setSelectedMirror('eu')}
                            >
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="mb-1">European Server</h5>
                                        <p className="mb-0 text-muted">Recommended for users in Europe</p>
                                    </div>
                                    {selectedMirror === 'eu' && (
                                        <i className="fas fa-check-circle text-success"></i>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* System Requirements */}
                <div className="minecraft-panel mt-4">
                    <h3 className="mb-4">System Requirements</h3>
                    <div className="table-responsive">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Minimum</th>
                                    <th>Recommended</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Operating System</strong></td>
                                    <td>Windows 7, macOS 10.13, Linux</td>
                                    <td>Windows 10+, macOS 10.15+, Ubuntu 20.04+</td>
                                </tr>
                                <tr>
                                    <td><strong>Processor</strong></td>
                                    <td>Intel Core i3 / AMD Ryzen 3</td>
                                    <td>Intel Core i5 / AMD Ryzen 5 or better</td>
                                </tr>
                                <tr>
                                    <td><strong>Memory</strong></td>
                                    <td>4 GB RAM</td>
                                    <td>8 GB RAM or more</td>
                                </tr>
                                <tr>
                                    <td><strong>Graphics</strong></td>
                                    <td>Integrated Graphics with OpenGL 4.1</td>
                                    <td>Dedicated GPU with 2GB+ VRAM</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Installation Steps */}
                <div className="minecraft-panel mt-4">
                    <h3 className="mb-4">Installation Guide</h3>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="d-flex">
                                <div className="me-3">
                                    <div className="minecraft-panel p-2 text-center" style={{width: '40px'}}>1</div>
                                </div>
                                <div>
                                    <h5>Download the Client</h5>
                                    <p>Select your desired version from the options above and download the installer for your operating system.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="d-flex">
                                <div className="me-3">
                                    <div className="minecraft-panel p-2 text-center" style={{width: '40px'}}>2</div>
                                </div>
                                <div>
                                    <h5>Run the Installer</h5>
                                    <p>Double-click the downloaded file to start the installation process. Follow the on-screen instructions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="d-flex">
                                <div className="me-3">
                                    <div className="minecraft-panel p-2 text-center" style={{width: '40px'}}>3</div>
                                </div>
                                <div>
                                    <h5>Launch Minecraft</h5>
                                    <p>Open the Minecraft Launcher. CleanCatClient will appear as a new profile in your launcher's profile list.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="d-flex">
                                <div className="me-3">
                                    <div className="minecraft-panel p-2 text-center" style={{width: '40px'}}>4</div>
                                </div>
                                <div>
                                    <h5>Configure Settings</h5>
                                    <p>Once in-game, press the 'Right Shift' key to open the CleanCatClient settings menu and customize your experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="minecraft-panel mt-4">
                    <h3 className="mb-4">Frequently Asked Questions</h3>
                    <div className="mb-4">
                        <h5>Is CleanCatClient compatible with other mods?</h5>
                        <p>Yes, CleanCatClient is designed to be compatible with most popular Minecraft mods. However, some mods may conflict with certain features.</p>
                    </div>
                    <div className="mb-4">
                        <h5>Will CleanCatClient work with multiplayer servers?</h5>
                        <p>CleanCatClient is designed to be compatible with most vanilla and modded servers. However, some servers may have anti-cheat systems that could flag certain features.</p>
                    </div>
                    <div className="mb-4">
                        <h5>How do I update to a newer version?</h5>
                        <p>Simply download the latest version and run the installer. It will automatically update your existing installation while preserving your settings.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download; 