import React, { useState, useEffect } from 'react';
import { FaLock, FaTrash, FaMinus, FaPlus, FaSpinner } from 'react-icons/fa';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaBitcoin } from 'react-icons/fa';

const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [selectedPayment, setSelectedPayment] = useState('card');
    const [isProcessing, setIsProcessing] = useState(false);
    const [promoCode, setPromoCode] = useState('');
    const [promoMessage, setPromoMessage] = useState('');
    const [promoDiscount, setPromoDiscount] = useState(0);
    const [orderForm, setOrderForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardNumber: '',
        cardExpiry: '',
        cardCvv: '',
        cardName: ''
    });

    useEffect(() => {
        // Load cart from localStorage
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;
        
        const updatedCart = cart.map(item => 
            item.id === productId ? { ...item, quantity: newQuantity } : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeItem = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const calculateTax = () => {
        return calculateSubtotal() * 0.08; // 8% tax
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const tax = calculateTax();
        const discount = subtotal * promoDiscount;
        return subtotal + tax - discount;
    };

    const applyPromoCode = () => {
        if (!promoCode) {
            setPromoMessage('Please enter a promo code');
            return;
        }

        // Simulate promo code validation
        if (promoCode.toUpperCase() === 'WELCOME10') {
            setPromoDiscount(0.1);
            setPromoMessage('Promo code applied successfully!');
        } else if (promoCode.toUpperCase() === 'MINECRAFT20') {
            setPromoDiscount(0.2);
            setPromoMessage('Promo code applied successfully!');
        } else {
            setPromoMessage('Invalid promo code');
            setPromoDiscount(0);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrderForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate order processing
        setTimeout(() => {
            setIsProcessing(false);
            localStorage.removeItem('cart');
            setCart([]);
            // Show success message or redirect
        }, 2000);
    };

    if (cart.length === 0) {
        return (
            <div className="container py-5">
                <div className="text-center py-5">
                    <h1 className="minecraft-title diamond mb-4">Your Cart is Empty</h1>
                    <p className="mb-4">Looks like you haven't added any items to your cart yet.</p>
                    <a href="/store" className="minecraft-btn primary">Go to Store</a>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h1 className="minecraft-title diamond text-center mb-5">Checkout</h1>
            
            <div className="checkout-container">
                <div className="row">
                    <div className="col-lg-8 mb-4 mb-lg-0">
                        {/* Cart Items */}
                        <div className="cart-items-container">
                            <h3 className="mb-4">Your Cart</h3>
                            {cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="row align-items-center">
                                        <div className="col-md-2 col-3 mb-2 mb-md-0">
                                            <div className="cart-item-img pixelated" style={{ backgroundColor: '#5D8544' }}></div>
                                        </div>
                                        <div className="col-md-4 col-9 mb-2 mb-md-0">
                                            <h5>{item.name}</h5>
                                            <div className="text-muted">${item.price.toFixed(2)} each</div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                            <div className="quantity-control">
                                                <button 
                                                    className="quantity-btn"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    <FaMinus />
                                                </button>
                                                <input 
                                                    type="text" 
                                                    className="quantity-input" 
                                                    value={item.quantity} 
                                                    readOnly 
                                                />
                                                <button 
                                                    className="quantity-btn"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-4 text-end">
                                            <div className="item-total">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </div>
                                        </div>
                                        <div className="col-md-1 col-2 text-end">
                                            <button 
                                                className="btn btn-sm btn-danger"
                                                onClick={() => removeItem(item.id)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Checkout Form */}
                        <form id="checkout-form" className="minecraft-panel" onSubmit={handleSubmit}>
                            <h3 className="mb-4">Payment Information</h3>
                            
                            <div className="mb-4">
                                <div 
                                    className={`payment-method ${selectedPayment === 'card' ? 'selected' : ''}`}
                                    onClick={() => setSelectedPayment('card')}
                                >
                                    <span className="payment-radio"></span>
                                    <FaCcVisa className="me-2" />
                                    <FaCcMastercard className="me-2" />
                                    Credit / Debit Card
                                </div>
                                <div 
                                    className={`payment-method ${selectedPayment === 'paypal' ? 'selected' : ''}`}
                                    onClick={() => setSelectedPayment('paypal')}
                                >
                                    <span className="payment-radio"></span>
                                    <FaCcPaypal className="me-2" />
                                    PayPal
                                </div>
                                <div 
                                    className={`payment-method ${selectedPayment === 'crypto' ? 'selected' : ''}`}
                                    onClick={() => setSelectedPayment('crypto')}
                                >
                                    <span className="payment-radio"></span>
                                    <FaBitcoin className="me-2" />
                                    Cryptocurrency
                                </div>
                            </div>
                            
                            {/* Credit Card Details */}
                            {selectedPayment === 'card' && (
                                <div className="payment-details">
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <label className="form-label">Card Number</label>
                                            <input 
                                                type="text" 
                                                className="minecraft-input form-control" 
                                                placeholder="1234 5678 9012 3456"
                                                name="cardNumber"
                                                value={orderForm.cardNumber}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Expiration Date</label>
                                            <input 
                                                type="text" 
                                                className="minecraft-input form-control" 
                                                placeholder="MM/YY"
                                                name="cardExpiry"
                                                value={orderForm.cardExpiry}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">CVV</label>
                                            <input 
                                                type="text" 
                                                className="minecraft-input form-control" 
                                                placeholder="123"
                                                name="cardCvv"
                                                value={orderForm.cardCvv}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label className="form-label">Cardholder Name</label>
                                            <input 
                                                type="text" 
                                                className="minecraft-input form-control" 
                                                placeholder="John Doe"
                                                name="cardName"
                                                value={orderForm.cardName}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            {/* PayPal Details */}
                            {selectedPayment === 'paypal' && (
                                <div className="payment-details">
                                    <p className="mb-4">You will be redirected to PayPal to complete your payment.</p>
                                </div>
                            )}
                            
                            {/* Crypto Details */}
                            {selectedPayment === 'crypto' && (
                                <div className="payment-details">
                                    <div className="mb-3">
                                        <label className="form-label">Select Cryptocurrency</label>
                                        <select className="minecraft-input form-control">
                                            <option value="btc">Bitcoin (BTC)</option>
                                            <option value="eth">Ethereum (ETH)</option>
                                            <option value="ltc">Litecoin (LTC)</option>
                                        </select>
                                    </div>
                                    <p>After submitting your order, you will receive payment instructions.</p>
                                </div>
                            )}
                            
                            <h3 className="mb-4 mt-5">Billing Information</h3>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">First Name</label>
                                    <input 
                                        type="text" 
                                        className="minecraft-input form-control" 
                                        placeholder="John"
                                        name="firstName"
                                        value={orderForm.firstName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Last Name</label>
                                    <input 
                                        type="text" 
                                        className="minecraft-input form-control" 
                                        placeholder="Doe"
                                        name="lastName"
                                        value={orderForm.lastName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-12 mb-3">
                                    <label className="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        className="minecraft-input form-control" 
                                        placeholder="john@example.com"
                                        name="email"
                                        value={orderForm.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-12 mb-3">
                                    <label className="form-label">Address</label>
                                    <input 
                                        type="text" 
                                        className="minecraft-input form-control" 
                                        placeholder="1234 Main St"
                                        name="address"
                                        value={orderForm.address}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">City</label>
                                    <input 
                                        type="text" 
                                        className="minecraft-input form-control" 
                                        placeholder="City"
                                        name="city"
                                        value={orderForm.city}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label className="form-label">State</label>
                                    <input 
                                        type="text" 
                                        className="minecraft-input form-control" 
                                        placeholder="State"
                                        name="state"
                                        value={orderForm.state}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label className="form-label">Zip</label>
                                    <input 
                                        type="text" 
                                        className="minecraft-input form-control" 
                                        placeholder="12345"
                                        name="zip"
                                        value={orderForm.zip}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            
                            <div className="mt-4">
                                <button 
                                    type="submit" 
                                    className="minecraft-btn primary w-100"
                                    disabled={isProcessing}
                                >
                                    {isProcessing ? (
                                        <>
                                            <FaSpinner className="fa-spin me-2" />
                                            Processing...
                                        </>
                                    ) : (
                                        'Complete Order'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    <div className="col-lg-4">
                        {/* Order Summary */}
                        <div className="checkout-summary">
                            <h3 className="mb-4">Order Summary</h3>
                            
                            <div className="summary-container">
                                <div className="summary-row">
                                    <div>Subtotal</div>
                                    <div>${calculateSubtotal().toFixed(2)}</div>
                                </div>
                                {promoDiscount > 0 && (
                                    <div className="summary-row text-success">
                                        <div>Discount ({promoDiscount * 100}%)</div>
                                        <div>-${(calculateSubtotal() * promoDiscount).toFixed(2)}</div>
                                    </div>
                                )}
                                <div className="summary-row">
                                    <div>Tax (8%)</div>
                                    <div>${calculateTax().toFixed(2)}</div>
                                </div>
                                <div className="summary-row summary-total">
                                    <div>Total</div>
                                    <div>${calculateTotal().toFixed(2)}</div>
                                </div>
                            </div>
                            
                            {/* Promo Code */}
                            <div className="mt-4">
                                <h5>Promo Code</h5>
                                <div className="promo-code-container">
                                    <input 
                                        type="text" 
                                        className="minecraft-input promo-code-input" 
                                        placeholder="Enter code"
                                        value={promoCode}
                                        onChange={(e) => setPromoCode(e.target.value)}
                                    />
                                    <button 
                                        className="minecraft-btn secondary"
                                        onClick={applyPromoCode}
                                    >
                                        Apply
                                    </button>
                                </div>
                                {promoMessage && (
                                    <div className={`text-${promoDiscount > 0 ? 'success' : 'danger'} small mt-2`}>
                                        {promoMessage}
                                    </div>
                                )}
                            </div>
                            
                            {/* Secure Checkout Message */}
                            <div className="mt-4 text-center">
                                <div className="d-flex align-items-center justify-content-center mb-2">
                                    <FaLock className="me-2" />
                                    <span>Secure Checkout</span>
                                </div>
                                <small className="text-muted">Your payment information is securely processed and never stored on our servers.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout; 