// store.js - JavaScript for the store page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart functionality
    initCart();
    
    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
    
    // Cart toggle
    const cartToggle = document.getElementById('cart-toggle');
    if (cartToggle) {
        cartToggle.addEventListener('click', toggleCart);
    }
    
    // Product filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', filterProducts);
    });
    
    // Product hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', highlightProduct);
        card.addEventListener('mouseleave', unhighlightProduct);
    });
    
    // Sort products dropdown
    const sortSelect = document.getElementById('sort-products');
    if (sortSelect) {
        sortSelect.addEventListener('change', sortProducts);
    }
});

// Initialize cart
function initCart() {
    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Update cart count
    updateCartCount(cart.length);
    
    // Render cart items if cart panel exists
    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        renderCartItems(cart, cartItemsContainer);
    }
}

// Add item to cart
function addToCart(e) {
    e.preventDefault();
    
    // Get product data from data attributes
    const button = e.currentTarget;
    const productId = button.dataset.productId;
    const productName = button.dataset.productName;
    const productPrice = parseFloat(button.dataset.productPrice);
    const productImage = button.dataset.productImage;
    
    // Get current cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        // Add new item
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update UI
    updateCartCount(cart.length);
    
    // Show animation
    showAddToCartAnimation(button);
    
    // Play sound
    playAddToCartSound();
    
    // Render cart items if cart panel exists
    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        renderCartItems(cart, cartItemsContainer);
    }
    
    // Show notification
    showNotification(`${productName} added to cart!`);
}

// Update cart count
function updateCartCount(count) {
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        element.textContent = count;
        
        // Add pulse animation
        element.classList.add('pulse-animation');
        setTimeout(() => {
            element.classList.remove('pulse-animation');
        }, 300);
    });
}

// Play add to cart sound
function playAddToCartSound() {
    console.log("Add to cart sound played");
    // This would play a sound in a real implementation
}

// Show add to cart animation
function showAddToCartAnimation(button) {
    // Create flying item
    const flyingItem = document.createElement('div');
    flyingItem.className = 'flying-item';
    flyingItem.style.position = 'absolute';
    flyingItem.style.width = '20px';
    flyingItem.style.height = '20px';
    flyingItem.style.backgroundColor = '#FFD700';
    flyingItem.style.borderRadius = '0';
    flyingItem.style.zIndex = '1000';
    
    // Get button position
    const buttonRect = button.getBoundingClientRect();
    flyingItem.style.top = buttonRect.top + 'px';
    flyingItem.style.left = buttonRect.left + 'px';
    
    // Get cart position
    const cart = document.querySelector('.cart-icon');
    const cartRect = cart.getBoundingClientRect();
    
    // Append to body
    document.body.appendChild(flyingItem);
    
    // Animate
    const startTime = Date.now();
    const duration = 800;
    
    function fly() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;
        
        if (progress < 1) {
            // Calculate position
            const currentX = buttonRect.left + (cartRect.left - buttonRect.left) * progress;
            const currentY = buttonRect.top + (cartRect.top - buttonRect.top) * progress;
            
            // Add curve
            const curveY = -Math.sin(progress * Math.PI) * 100;
            
            // Update position
            flyingItem.style.left = currentX + 'px';
            flyingItem.style.top = (currentY + curveY) + 'px';
            
            // Scale down and rotate
            const scale = 1 - (progress * 0.5);
            const rotation = progress * 360;
            flyingItem.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
            
            requestAnimationFrame(fly);
        } else {
            // Animation complete
            flyingItem.remove();
            
            // Flash cart icon
            cart.classList.add('flash-animation');
            setTimeout(() => {
                cart.classList.remove('flash-animation');
            }, 300);
        }
    }
    
    requestAnimationFrame(fly);
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
        cartSidebar.classList.toggle('open');
    }
}

// Render cart items
function renderCartItems(cart, container) {
    // Clear container
    container.innerHTML = '';
    
    if (cart.length === 0) {
        container.innerHTML = '<div class="text-center py-4">Your cart is empty</div>';
        return;
    }
    
    // Calculate total
    let totalPrice = 0;
    
    // Create items
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item d-flex align-items-center mb-3 p-2 border-bottom';
        itemElement.innerHTML = `
            <div class="cart-item-image me-2" style="width: 40px; height: 40px; background-color: #5D8544;"></div>
            <div class="cart-item-details flex-grow-1">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
            </div>
            <div class="cart-item-total fw-bold">$${itemTotal.toFixed(2)}</div>
            <button class="btn btn-sm btn-danger ms-2 remove-item" data-product-id="${item.id}">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        container.appendChild(itemElement);
    });
    
    // Add total and checkout button
    const totalElement = document.createElement('div');
    totalElement.className = 'cart-total d-flex justify-content-between mt-3 py-3 border-top';
    totalElement.innerHTML = `
        <div class="fw-bold">Total:</div>
        <div class="fw-bold">$${totalPrice.toFixed(2)}</div>
    `;
    container.appendChild(totalElement);
    
    const checkoutButton = document.createElement('a');
    checkoutButton.href = '/checkout';
    checkoutButton.className = 'minecraft-btn primary w-100 text-center mt-3';
    checkoutButton.textContent = 'Checkout';
    container.appendChild(checkoutButton);
    
    // Add event listeners to remove buttons
    const removeButtons = container.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeCartItem);
    });
}

// Remove item from cart
function removeCartItem(e) {
    const productId = e.currentTarget.dataset.productId;
    
    // Get current cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Filter out the item
    cart = cart.filter(item => item.id !== productId);
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update UI
    updateCartCount(cart.length);
    
    // Re-render cart items
    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        renderCartItems(cart, cartItemsContainer);
    }
    
    // Play remove sound
    console.log("Remove item sound played");
}

// Filter products
function filterProducts(e) {
    const filterValue = e.currentTarget.dataset.filter;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    
    // Get all products
    const products = document.querySelectorAll('.product-card');
    
    if (filterValue === 'all') {
        // Show all products
        products.forEach(product => {
            product.style.display = 'block';
            animateProductIn(product);
        });
    } else {
        // Filter by category
        products.forEach(product => {
            if (product.dataset.category === filterValue) {
                product.style.display = 'block';
                animateProductIn(product);
            } else {
                animateProductOut(product);
            }
        });
    }
}

// Animate product in
function animateProductIn(product) {
    product.style.opacity = '0';
    product.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        product.style.transition = 'all 0.3s ease-out';
        product.style.opacity = '1';
        product.style.transform = 'scale(1)';
    }, 50);
}

// Animate product out
function animateProductOut(product) {
    product.style.transition = 'all 0.3s ease-out';
    product.style.opacity = '0';
    product.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        product.style.display = 'none';
    }, 300);
}

// Sort products
function sortProducts(e) {
    const sortValue = e.target.value;
    const productsContainer = document.querySelector('.products-container');
    const products = Array.from(document.querySelectorAll('.product-card'));
    
    // Sort products array
    products.sort((a, b) => {
        const aPrice = parseFloat(a.dataset.price);
        const bPrice = parseFloat(b.dataset.price);
        
        if (sortValue === 'price-low-high') {
            return aPrice - bPrice;
        } else if (sortValue === 'price-high-low') {
            return bPrice - aPrice;
        } else if (sortValue === 'name-a-z') {
            return a.dataset.name.localeCompare(b.dataset.name);
        } else if (sortValue === 'name-z-a') {
            return b.dataset.name.localeCompare(a.dataset.name);
        }
        
        return 0;
    });
    
    // Remove all products from container
    productsContainer.innerHTML = '';
    
    // Add sorted products back to container
    products.forEach(product => {
        productsContainer.appendChild(product);
    });
}

// Highlight product on hover
function highlightProduct() {
    this.classList.add('product-highlight');
    
    // Add glow effect
    const glow = document.createElement('div');
    glow.className = 'product-glow';
    glow.style.position = 'absolute';
    glow.style.top = '0';
    glow.style.left = '0';
    glow.style.right = '0';
    glow.style.bottom = '0';
    glow.style.boxShadow = '0 0 20px 5px rgba(255, 215, 0, 0.5)';
    glow.style.opacity = '0';
    glow.style.transition = 'opacity 0.3s';
    glow.style.pointerEvents = 'none';
    glow.style.zIndex = '-1';
    
    this.appendChild(glow);
    
    // Fade in glow
    setTimeout(() => {
        glow.style.opacity = '1';
    }, 50);
}

// Remove highlight on mouse leave
function unhighlightProduct() {
    this.classList.remove('product-highlight');
    
    // Remove glow
    const glow = this.querySelector('.product-glow');
    if (glow) {
        glow.style.opacity = '0';
        
        setTimeout(() => {
            glow.remove();
        }, 300);
    }
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'minecraft-alert success notification';
    notification.innerHTML = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '1000';
    notification.style.transition = 'all 0.3s ease-out';
    notification.style.transform = 'translateX(100%)';
    
    // Add to body
    document.body.appendChild(notification);
    
    // Slide in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 50);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}
