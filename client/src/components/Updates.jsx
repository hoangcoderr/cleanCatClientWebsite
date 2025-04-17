import React, { useState, useEffect } from 'react';
import { FaSearch, FaDownload } from 'react-icons/fa';

const Updates = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedVersion, setSelectedVersion] = useState('all');
    const [updates] = useState([
        {
            version: '1.1.0',
            date: 'March 10, 2023',
            title: 'Major Feature Update',
            description: 'This update introduces several new features and improvements to enhance your gameplay experience.',
            features: [
                { text: 'Added new cosmetic options including animated capes and custom particles', type: 'new' },
                { text: 'Improved rendering performance by optimizing shader loading', type: 'improvement' },
                { text: 'Enhanced mod compatibility with popular Minecraft mods', type: 'improvement' },
                { text: 'Added customizable hotkeys for all client features', type: 'new' },
                { text: 'Implemented new HUD customization options', type: 'new' },
                { text: 'Fixed crash when using certain resource packs', type: 'fix' }
            ]
        },
        {
            version: '1.0.1',
            date: 'February 1, 2023',
            title: 'Bug Fixes & Improvements',
            description: 'This maintenance update addresses several bugs and improves stability.',
            features: [
                { text: 'Fixed memory leak when playing for extended periods', type: 'fix' },
                { text: 'Improved chunk loading performance', type: 'improvement' },
                { text: 'Fixed compatibility issues with Minecraft 1.19.3', type: 'fix' },
                { text: 'Reduced CPU usage during idle moments', type: 'improvement' },
                { text: 'Fixed several UI glitches in the settings menu', type: 'fix' }
            ]
        },
        {
            version: '1.0.0',
            date: 'January 15, 2023',
            title: 'Initial Release',
            description: 'The first public release of CleanCatClient with core features and optimizations.',
            features: [
                { text: 'Core performance optimizations for better FPS', type: 'new' },
                { text: 'Basic HUD customization options', type: 'new' },
                { text: 'Custom keybinding system', type: 'new' },
                { text: 'Screenshot manager with auto-upload capability', type: 'new' },
                { text: 'Basic cosmetic features (capes, hats)', type: 'new' },
                { text: 'Settings system with profiles', type: 'new' }
            ]
        }
    ]);

    const [roadmap] = useState([
        {
            version: '1.2.0',
            features: [
                'Advanced shader support',
                'Custom player models',
                'Enhanced minimap system',
                'Voice chat integration'
            ]
        },
        {
            version: '1.3.0',
            features: [
                'Replay system',
                'Advanced macros',
                'Custom animations',
                'Server-side integration'
            ]
        },
        {
            version: 'Future',
            features: [
                'Mobile companion app',
                'Custom mod integration API',
                'AI-assisted gameplay features',
                'Community marketplace'
            ]
        }
    ]);

    const filteredUpdates = updates.filter(update => {
        const matchesSearch = searchTerm === '' || 
            update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            update.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            update.features.some(feature => feature.text.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesVersion = selectedVersion === 'all' || 
            update.version.startsWith(selectedVersion);
        
        return matchesSearch && matchesVersion;
    });

    const getFeatureTypeClass = (type) => {
        switch (type) {
            case 'new': return 'feature-new';
            case 'improvement': return 'feature-improvement';
            case 'fix': return 'feature-fix';
            default: return '';
        }
    };

    return (
        <div className="container py-5">
            <h1 className="minecraft-title diamond text-center mb-4">CleanCatClient Updates</h1>
            <p className="text-center mb-5">Stay informed about the latest features, improvements, and bug fixes for CleanCatClient.</p>
            
            <div className="updates-container">
                {/* Search and Filter */}
                <div className="minecraft-panel search-updates">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <div className="input-group">
                                <span className="input-group-text">
                                    <FaSearch />
                                </span>
                                <input 
                                    type="text" 
                                    className="minecraft-input form-control" 
                                    placeholder="Search updates..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-wrap justify-content-md-end">
                                <button 
                                    className={`version-filter-btn ${selectedVersion === 'all' ? 'active' : ''}`}
                                    onClick={() => setSelectedVersion('all')}
                                >
                                    All
                                </button>
                                <button 
                                    className={`version-filter-btn ${selectedVersion === '1.1' ? 'active' : ''}`}
                                    onClick={() => setSelectedVersion('1.1')}
                                >
                                    v1.1.x
                                </button>
                                <button 
                                    className={`version-filter-btn ${selectedVersion === '1.0' ? 'active' : ''}`}
                                    onClick={() => setSelectedVersion('1.0')}
                                >
                                    v1.0.x
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Updates Timeline */}
                <div className="timeline">
                    {filteredUpdates.map((update, index) => (
                        <div key={index} className="update-card fade-in-element" data-version={update.version}>
                            <div className="d-flex align-items-center mb-3">
                                <span className="update-version-badge">v{update.version}</span>
                                <span className="update-date">Released {update.date}</span>
                            </div>
                            <h3>{update.title}</h3>
                            <p>{update.description}</p>
                            
                            <ul className="feature-list">
                                {update.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="feature-item">
                                        {feature.text}
                                        <span className={`feature-type ${getFeatureTypeClass(feature.type)}`}>
                                            {feature.type.toUpperCase()}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="mt-4">
                                <a href="#" className="minecraft-btn primary">
                                    <FaDownload className="me-2" />
                                    Download v{update.version}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Roadmap */}
                <div className="minecraft-panel mt-5">
                    <h3 className="minecraft-title emerald mb-4">Development Roadmap</h3>
                    <p>Here's a sneak peek at what we're working on for future updates:</p>
                    
                    <div className="row mt-4">
                        {roadmap.map((item, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card h-100">
                                    <div className="card-header">
                                        {item.version === 'Future' ? 'Future Ideas' : `Coming in ${item.version}`}
                                    </div>
                                    <div className="card-body">
                                        <ul>
                                            {item.features.map((feature, featureIndex) => (
                                                <li key={featureIndex}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Updates; 