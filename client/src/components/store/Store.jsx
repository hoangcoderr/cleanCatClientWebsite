import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Store = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [sortBy, setSortBy] = useState('featured');

    const products = [
        {
            id: 1,
            name: "Animated Capes Pack",
            description: "A collection of 10 animated capes to make your character stand out in multiplayer.",
            price: 4.99,
            category: "cosmetic",
            image: "capes.jpg"
        },
        {
            id: 2,
            name: "Advanced HUD Pack",
            description: "Customize your game interface with advanced HUD elements, status displays, and minimap features.",
            price: 7.99,
            category: "feature",
            image: "hud.jpg"
        },
        {
            id: 3,
            name: "Lifetime Package",
            description: "Get lifetime access to all current and future features of CleanCatClient. Best value!",
            price: 39.99,
            category: "package",
            image: "lifetime.jpg"
        },
        {
            id: 4,
            name: "Custom Particles Pack",
            description: "Add spectacular particle effects to your character's movements and actions.",
            price: 3.99,
            category: "cosmetic",
            image: "particles.jpg"
        },
        {
            id: 5,
            name: "Performance Optimizer",
            description: "Advanced optimization tools to boost your FPS and reduce lag even further.",
            price: 5.99,
            category: "feature",
            image: "performance.jpg"
        }
    ];

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const filteredProducts = products.filter(product => 
        activeFilter === 'all' || product.category === activeFilter
    );

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'price-low-high':
                return a.price - b.price;
            case 'price-high-low':
                return b.price - a.price;
            case 'name-a-z':
                return a.name.localeCompare(b.name);
            case 'name-z-a':
                return b.name.localeCompare(a.name);
            default:
                return 0;
        }
    });

    return (
        <div className="container py-5">
            <h1 className="minecraft-title diamond text-center mb-5">CleanCatClient Store</h1>
            
            {/* Category Filters */}
            <div className="category-filters mb-4">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div>
                        <button 
                            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('all')}
                        >
                            All Items
                        </button>
                        <button 
                            className={`filter-btn ${activeFilter === 'package' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('package')}
                        >
                            Packages
                        </button>
                        <button 
                            className={`filter-btn ${activeFilter === 'cosmetic' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('cosmetic')}
                        >
                            Cosmetics
                        </button>
                        <button 
                            className={`filter-btn ${activeFilter === 'feature' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('feature')}
                        >
                            Features
                        </button>
                    </div>
                    <div className="mt-3 mt-md-0">
                        <select 
                            id="sort-products" 
                            className="minecraft-input"
                            value={sortBy}
                            onChange={handleSortChange}
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low-high">Price: Low to High</option>
                            <option value="price-high-low">Price: High to Low</option>
                            <option value="name-a-z">Name: A to Z</option>
                            <option value="name-z-a">Name: Z to A</option>
                        </select>
                    </div>
                </div>
            </div>
            
            {/* Products */}
            <div className="row products-container">
                {sortedProducts.map(product => (
                    <div key={product.id} className="col-md-6 col-lg-4 mb-4">
                        <div className="product-card h-100" data-category={product.category}>
                            <div className="price-tag">${product.price}</div>
                            <div 
                                className="product-img" 
                                style={{
                                    backgroundImage: `url('/static/images/${product.image}')`,
                                    height: '200px'
                                }}
                            ></div>
                            <div className="product-content">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <button 
                                        className="minecraft-btn primary add-to-cart-btn"
                                        onClick={() => {
                                            // Handle add to cart
                                            console.log('Added to cart:', product);
                                        }}
                                    >
                                        Add to Cart
                                    </button>
                                    <Link to={`/store/product/${product.id}`} className="btn btn-link text-info">
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Bundle Offer */}
            <div className="minecraft-panel mt-5">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <h3 className="minecraft-title gold mb-3">Special Bundle Offer</h3>
                        <p>Get all premium features, cosmetics, and future updates at a discounted price with our Ultimate Bundle!</p>
                        <ul className="mb-4">
                            <li>Access to all premium features</li>
                            <li>All cosmetic packs included</li>
                            <li>Priority support</li>
                            <li>Early access to beta features</li>
                            <li>Free future updates</li>
                        </ul>
                        <h4 className="mb-3">
                            <s className="text-muted">$59.99</s>{' '}
                            <span className="text-success">$49.99</span>{' '}
                            <span className="badge bg-danger">SAVE 16%</span>
                        </h4>
                    </div>
                    <div className="col-md-4 text-center">
                        <button 
                            className="minecraft-btn gold add-to-cart-btn"
                            onClick={() => {
                                // Handle add bundle to cart
                                console.log('Added bundle to cart');
                            }}
                        >
                            Add Bundle to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Store; 