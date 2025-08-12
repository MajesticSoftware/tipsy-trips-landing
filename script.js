// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Only animate once
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});

// Membership pricing toggle
const billingToggle = document.getElementById('billing-toggle');
const priceElements = document.querySelectorAll('.price-amount');
const toggleLabels = document.querySelectorAll('.toggle-label');

billingToggle.addEventListener('change', () => {
    const isAnnual = billingToggle.checked;
    
    priceElements.forEach(element => {
        const monthlyPrice = element.dataset.monthly;
        const annualPrice = element.dataset.annual;
        element.textContent = isAnnual ? annualPrice : monthlyPrice;
    });
    
    toggleLabels.forEach(label => {
        if (label.dataset.billing === 'annual') {
            label.classList.toggle('active', isAnnual);
        } else if (label.dataset.billing === 'monthly') {
            label.classList.toggle('active', !isAnnual);
        }
    });
});

// Toggle label click handlers
toggleLabels.forEach(label => {
    label.addEventListener('click', () => {
        if (label.dataset.billing === 'annual') {
            billingToggle.checked = true;
        } else if (label.dataset.billing === 'monthly') {
            billingToggle.checked = false;
        }
        billingToggle.dispatchEvent(new Event('change'));
    });
});




// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-overlay');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});


// Add loading animations
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger hero animations
    const heroElements = document.querySelectorAll('.animate-fade-up, .animate-fade-up-delay, .animate-fade-up-delay-2, .animate-fade-up-delay-3');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2024', currentYear);
}

// App store button click tracking
document.querySelectorAll('.app-store-btn, .google-play-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = button.classList.contains('app-store-btn') ? 'iOS' : 'Android';
        
        // Track the click (you would send this to your analytics)
        console.log(`App download clicked: ${platform}`);
        
        // Visual feedback
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 200);
        
        // In production, you would redirect to the actual app store
        // window.location.href = button.href;
        
        // For demo, show a message
        showNotification(`Opening ${platform} store...`);
    });
});

// CTA button animations
document.querySelectorAll('.cta-button, .card-cta').forEach(button => {
    button.addEventListener('mouseenter', (e) => {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Partner card hover effects
document.querySelectorAll('.partner-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
    });
});

// Notification helper function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #0D4E5B;
        color: white;
        padding: 15px 30px;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideUp 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            transform: translateX(-50%) translateY(100px);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(100px);
            opacity: 0;
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Performance optimization - lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// Handle viewport height on mobile (accounts for browser chrome)
function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setViewportHeight();
window.addEventListener('resize', setViewportHeight);
window.addEventListener('orientationchange', setViewportHeight);

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Tipsy Trips website initialized');
    
    // Add initial animation classes
    document.body.classList.add('page-loaded');
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        document.body.classList.add('reduced-motion');
    }
});