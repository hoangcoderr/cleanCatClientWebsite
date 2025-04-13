// auth.js - JavaScript for authentication-related functionality

document.addEventListener('DOMContentLoaded', function() {
    // Form validation for login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', validateLoginForm);
    }
    
    // Form validation for registration
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', validateRegisterForm);
        
        // Add password strength meter
        const passwordInput = document.getElementById('password');
        if (passwordInput) {
            passwordInput.addEventListener('input', updatePasswordStrength);
        }
        
        // Add username availability check
        const usernameInput = document.getElementById('username');
        if (usernameInput) {
            usernameInput.addEventListener('blur', checkUsernameAvailability);
        }
    }
    
    // Fancy button hover effects
    const authButtons = document.querySelectorAll('.auth-btn');
    authButtons.forEach(button => {
        button.addEventListener('mouseenter', addButtonParticles);
        button.addEventListener('mouseleave', removeButtonParticles);
    });
});

// Validate login form
function validateLoginForm(e) {
    let valid = true;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Clear previous error messages
    clearErrors();
    
    // Username validation
    if (!username.trim()) {
        showError('username', 'Username is required');
        valid = false;
    }
    
    // Password validation
    if (!password) {
        showError('password', 'Password is required');
        valid = false;
    }
    
    if (!valid) {
        e.preventDefault();
        playErrorSound();
    } else {
        playSuccessSound();
    }
}

// Validate registration form
function validateRegisterForm(e) {
    let valid = true;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Clear previous error messages
    clearErrors();
    
    // Username validation
    if (!username.trim()) {
        showError('username', 'Username is required');
        valid = false;
    } else if (!/^[a-zA-Z0-9_]{3,16}$/.test(username)) {
        showError('username', 'Username must be 3-16 characters and contain only letters, numbers, and underscores');
        valid = false;
    }
    
    // Email validation
    if (!email.trim()) {
        showError('email', 'Email is required');
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('email', 'Please enter a valid email address');
        valid = false;
    }
    
    // Password validation
    if (!password) {
        showError('password', 'Password is required');
        valid = false;
    } else if (password.length < 8) {
        showError('password', 'Password must be at least 8 characters long');
        valid = false;
    }
    
    // Confirm password
    if (password !== confirmPassword) {
        showError('confirm-password', 'Passwords do not match');
        valid = false;
    }
    
    if (!valid) {
        e.preventDefault();
        playErrorSound();
    } else {
        playSuccessSound();
    }
}

// Show error message
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.createElement('div');
    errorElement.className = 'minecraft-alert danger mt-2';
    errorElement.innerHTML = message;
    
    field.classList.add('is-invalid');
    field.parentNode.appendChild(errorElement);
    
    // Add shake animation to the field
    field.classList.add('shake-animation');
    setTimeout(() => {
        field.classList.remove('shake-animation');
    }, 500);
}

// Clear all error messages
function clearErrors() {
    document.querySelectorAll('.minecraft-alert.danger').forEach(element => {
        element.remove();
    });
    
    document.querySelectorAll('.is-invalid').forEach(element => {
        element.classList.remove('is-invalid');
    });
}

// Play error sound effect
function playErrorSound() {
    console.log("Error sound played");
    // This would play a sound in a real implementation
}

// Play success sound effect
function playSuccessSound() {
    console.log("Success sound played");
    // This would play a sound in a real implementation
}

// Update password strength meter
function updatePasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthMeter = document.getElementById('password-strength');
    
    if (!strengthMeter) return;
    
    // Calculate strength
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    
    // Complexity checks
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    // Update meter
    strengthMeter.style.width = `${(strength / 5) * 100}%`;
    
    // Update color
    if (strength < 2) {
        strengthMeter.style.backgroundColor = '#B22222'; // Weak
    } else if (strength < 4) {
        strengthMeter.style.backgroundColor = '#DAA520'; // Medium
    } else {
        strengthMeter.style.backgroundColor = '#5D8544'; // Strong
    }
}

// Check username availability
function checkUsernameAvailability() {
    const username = document.getElementById('username').value;
    const availabilityIndicator = document.getElementById('username-availability');
    
    if (!availabilityIndicator || !username.trim()) return;
    
    // Show loading state
    availabilityIndicator.innerHTML = 'Checking...';
    availabilityIndicator.className = 'text-muted small';
    
    // In a real implementation, this would check against the server
    // For now, simulate a server check with a timeout
    setTimeout(() => {
        // This is just a simple simulation - in a real app, this would be an actual API call
        const isAvailable = username.length > 3 && !['admin', 'moderator', 'user'].includes(username.toLowerCase());
        
        if (isAvailable) {
            availabilityIndicator.innerHTML = 'Username available!';
            availabilityIndicator.className = 'text-success small';
        } else {
            availabilityIndicator.innerHTML = 'Username not available';
            availabilityIndicator.className = 'text-danger small';
        }
    }, 800);
}

// Add particles effect to buttons on hover
function addButtonParticles() {
    const button = this;
    
    // Create particle container if it doesn't exist
    let particleContainer = button.querySelector('.button-particles');
    if (!particleContainer) {
        particleContainer = document.createElement('div');
        particleContainer.className = 'button-particles';
        particleContainer.style.position = 'absolute';
        particleContainer.style.top = '0';
        particleContainer.style.left = '0';
        particleContainer.style.width = '100%';
        particleContainer.style.height = '100%';
        particleContainer.style.overflow = 'hidden';
        particleContainer.style.pointerEvents = 'none';
        button.appendChild(particleContainer);
    }
    
    // Add particles
    const interval = setInterval(() => {
        if (button.querySelector('.button-particles')) {
            createButtonParticle(particleContainer);
        } else {
            clearInterval(interval);
        }
    }, 100);
    
    // Store interval ID for cleanup
    button.dataset.particleInterval = interval;
}

// Remove particles on mouse leave
function removeButtonParticles() {
    const button = this;
    
    // Clear the interval
    if (button.dataset.particleInterval) {
        clearInterval(button.dataset.particleInterval);
    }
    
    // Remove particle container
    const particleContainer = button.querySelector('.button-particles');
    if (particleContainer) {
        particleContainer.remove();
    }
}

// Create a single button particle
function createButtonParticle(container) {
    const particle = document.createElement('div');
    
    // Random particle styling
    const size = Math.floor(Math.random() * 4) + 2; // 2-6px
    const colors = ['#FFD700', '#FFFFFF', '#B9F2FF'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.position = 'absolute';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    particle.style.opacity = (Math.random() * 0.6) + 0.2; // 0.2-0.8
    
    // Random starting position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.bottom = '0';
    
    // Add to container
    container.appendChild(particle);
    
    // Animate rising
    const duration = (Math.random() * 1000) + 500; // 500-1500ms
    const startTime = Date.now();
    
    function rise() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;
        
        if (progress < 1) {
            particle.style.bottom = `${progress * 100}%`;
            particle.style.opacity = (1 - progress) * 0.8;
            requestAnimationFrame(rise);
        } else {
            particle.remove();
        }
    }
    
    requestAnimationFrame(rise);
}
