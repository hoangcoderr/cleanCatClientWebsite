import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Donate = () => {
    const [selectedTier, setSelectedTier] = useState(null);
    const [customAmount, setCustomAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('card');

    const tiers = [
        {
            name: "Iron",
            price: 5,
            period: "month",
            features: [
                "Custom chat prefix",
                "Access to /nick command",
                "Exclusive discord role",
                "Early access to updates"
            ],
            color: "iron"
        },
        {
            name: "Gold",
            price: 10,
            period: "month",
            features: [
                "All Iron tier features",
                "Custom particle effects",
                "Priority support",
                "Access to beta features",
                "Custom cape designs"
            ],
            color: "gold",
            popular: true
        },
        {
            name: "Diamond",
            price: 25,
            period: "month",
            features: [
                "All Gold tier features",
                "Custom armor textures",
                "Private discord channel",
                "Vote on future features",
                "Custom GUI themes",
                "Exclusive monthly cosmetics"
            ],
            color: "diamond"
        }
    ];

    const handleSubscribe = (tier) => {
        setSelectedTier(tier);
        // Implementation would connect to payment processor
        console.log(`Subscribing to ${tier.name} tier`);
    };

    const handleOneTimeDonation = () => {
        if (!customAmount) return;
        // Implementation would connect to payment processor
        console.log(`Processing one-time donation of $${customAmount}`);
    };

    return (
        <div className="container py-5">
            <div className="donate-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div className="text-center mb-5">
                    <h1 className="minecraft-title diamond mb-4">Support CleanCatClient</h1>
                    <p className="lead mb-5">Help us continue developing and improving CleanCatClient by becoming a supporter!</p>
                </div>

                {/* Subscription Tiers */}
                <div className="row mb-5">
                    {tiers.map((tier, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className={`minecraft-panel h-100 ${tier.popular ? 'border-gold' : ''}`}>
                                {tier.popular && (
                                    <div className="position-absolute top-0 end-0 bg-gold text-dark px-3 py-1">
                                        MOST POPULAR
                                    </div>
                                )}
                                <div className="text-center mb-4">
                                    <h3 className={`minecraft-title ${tier.color}`}>{tier.name} Tier</h3>
                                    <div className="price-tag">
                                        <span className="currency">$</span>
                                        <span className="amount">{tier.price}</span>
                                        <span className="period">/{tier.period}</span>
                                    </div>
                                </div>
                                <ul className="feature-list mb-4">
                                    {tier.features.map((feature, i) => (
                                        <li key={i} className="mb-2">✓ {feature}</li>
                                    ))}
                                </ul>
                                <button 
                                    className={`minecraft-btn ${tier.color} w-100`}
                                    onClick={() => handleSubscribe(tier)}
                                >
                                    Subscribe Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* One-time Donation */}
                <div className="minecraft-panel mb-5">
                    <h3 className="text-center mb-4">One-time Donation</h3>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="mb-4">
                                <label className="form-label">Amount (USD)</label>
                                <div className="input-group">
                                    <span className="input-group-text">$</span>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        value={customAmount}
                                        onChange={(e) => setCustomAmount(e.target.value)}
                                        min="1"
                                        placeholder="Enter amount"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Payment Method</label>
                                <div className="d-flex gap-3">
                                    <div 
                                        className={`minecraft-panel p-3 cursor-pointer ${paymentMethod === 'card' ? 'border-gold' : ''}`}
                                        onClick={() => setPaymentMethod('card')}
                                    >
                                        <i className="fas fa-credit-card me-2"></i>
                                        Credit Card
                                    </div>
                                    <div 
                                        className={`minecraft-panel p-3 cursor-pointer ${paymentMethod === 'paypal' ? 'border-gold' : ''}`}
                                        onClick={() => setPaymentMethod('paypal')}
                                    >
                                        <i className="fab fa-paypal me-2"></i>
                                        PayPal
                                    </div>
                                    <div 
                                        className={`minecraft-panel p-3 cursor-pointer ${paymentMethod === 'crypto' ? 'border-gold' : ''}`}
                                        onClick={() => setPaymentMethod('crypto')}
                                    >
                                        <i className="fab fa-bitcoin me-2"></i>
                                        Crypto
                                    </div>
                                </div>
                            </div>

                            <button 
                                className="minecraft-btn primary w-100"
                                onClick={handleOneTimeDonation}
                                disabled={!customAmount}
                            >
                                Donate Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Perks Overview */}
                <div className="minecraft-panel mb-5">
                    <h3 className="text-center mb-4">Supporter Perks Overview</h3>
                    <div className="row text-center">
                        <div className="col-md-3 mb-4">
                            <div className="minecraft-panel p-4">
                                <i className="fas fa-star fa-2x mb-3 text-gold"></i>
                                <h5>Exclusive Features</h5>
                                <p>Access to special commands and features not available to regular users.</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="minecraft-panel p-4">
                                <i className="fas fa-palette fa-2x mb-3 text-emerald"></i>
                                <h5>Custom Cosmetics</h5>
                                <p>Unique capes, particle effects, and armor textures to stand out in-game.</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="minecraft-panel p-4">
                                <i className="fas fa-headset fa-2x mb-3 text-diamond"></i>
                                <h5>Priority Support</h5>
                                <p>Get faster responses and dedicated support for any issues.</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="minecraft-panel p-4">
                                <i className="fas fa-users fa-2x mb-3 text-redstone"></i>
                                <h5>Community Access</h5>
                                <p>Join our exclusive Discord channels and vote on future updates.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="minecraft-panel">
                    <h3 className="text-center mb-4">Frequently Asked Questions</h3>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <h5>How are donations used?</h5>
                            <p>Your donations help cover server costs, development expenses, and allow us to dedicate more time to improving CleanCatClient.</p>
                        </div>
                        <div className="col-md-6 mb-4">
                            <h5>Can I cancel my subscription?</h5>
                            <p>Yes, you can cancel your subscription at any time. You'll continue to have access to perks until the end of your billing period.</p>
                        </div>
                        <div className="col-md-6 mb-4">
                            <h5>How do I claim my perks?</h5>
                            <p>After your donation is processed, perks are automatically activated on your account within 24 hours.</p>
                        </div>
                        <div className="col-md-6 mb-4">
                            <h5>Are donations refundable?</h5>
                            <p>One-time donations are non-refundable. For subscription issues, please contact our support team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate; 