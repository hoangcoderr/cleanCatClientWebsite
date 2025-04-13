// main.js - Main JavaScript functionality for CleanCatClient website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Add Minecraft sound effects to buttons
    const buttons = document.querySelectorAll('.minecraft-btn, .btn');
    buttons.forEach(button => {
        button.addEventListener('click', playButtonClickSound);
    });

    // Animated pixel effects for hero section
    animateHeroBackground();

    // Mobile navigation toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', playButtonClickSound);
    }

    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in-element');
    if (fadeElements.length > 0) {
        window.addEventListener('scroll', fadeInOnScroll);
        // Trigger once on load
        fadeInOnScroll();
    }

    // Handle flash messages
    const flashMessages = document.querySelectorAll('.alert');
    if (flashMessages.length > 0) {
        flashMessages.forEach(message => {
            setTimeout(() => {
                fadeOutElement(message);
            }, 5000);
        });
    }
});

// Play Minecraft-style click sound
function playButtonClickSound() {
    // This would normally play a sound file, but we'll simulate it for now
    console.log("Button click sound played");
    
    // Visual feedback
    this.classList.add('btn-clicked');
    setTimeout(() => {
        this.classList.remove('btn-clicked');
    }, 100);
}

// Animate the hero background with pixel particles
function animateHeroBackground() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    // Create pixel particles container
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'pixel-particles';
    particlesContainer.style.position = 'absolute';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.overflow = 'hidden';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.zIndex = '0';
    
    heroSection.appendChild(particlesContainer);
    
    // Add particles
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

// Create a floating pixel particle
function createParticle(container) {
    const particle = document.createElement('div');
    
    // Random particle styling
    const size = Math.floor(Math.random() * 8) + 4; // 4-12px
    const colors = ['#5D8544', '#8B5A2B', '#B9F2FF', '#FFD700', '#FFFFFF'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.position = 'absolute';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    particle.style.opacity = (Math.random() * 0.6) + 0.2; // 0.2-0.8
    
    // Random starting position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Add to container
    container.appendChild(particle);
    
    // Animate floating
    animateFloating(particle);
}

// Animate a particle floating up
function animateFloating(particle) {
    // Current position
    const startTop = parseFloat(particle.style.top);
    const startLeft = parseFloat(particle.style.left);
    
    // Random movement
    const duration = (Math.random() * 20000) + 10000; // 10-30 seconds
    const endTop = startTop - (Math.random() * 20) - 10; // Move up 10-30%
    const leftVariation = (Math.random() * 10) - 5; // Drift left/right ±5%
    
    // Animation
    const startTime = Date.now();
    
    function updatePosition() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;
        
        if (progress < 1) {
            const currentTop = startTop - ((startTop - endTop) * progress);
            const currentLeft = startLeft + (leftVariation * Math.sin(progress * Math.PI));
            
            particle.style.top = `${currentTop}%`;
            particle.style.left = `${currentLeft}%`;
            
            requestAnimationFrame(updatePosition);
        } else {
            // Reset particle to bottom when animation completes
            particle.style.top = `${100 + Math.random() * 20}%`; // Just below visible area
            particle.style.left = `${Math.random() * 100}%`;
            
            // Start floating again
            setTimeout(() => {
                animateFloating(particle);
            }, Math.random() * 1000);
        }
    }
    
    requestAnimationFrame(updatePosition);
}

// Fade in elements as they scroll into view
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in-element');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Element is at least partially visible
        if (elementTop < windowHeight * 0.9 && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// Fade out an element
function fadeOutElement(element) {
    element.style.transition = 'opacity 0.5s ease-out';
    element.style.opacity = '0';
    
    setTimeout(() => {
        element.remove();
    }, 500);
}
