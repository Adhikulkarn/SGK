// DOM elements
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');

// Mobile navigation toggle
mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Change the toggle icon
    const icon = mobileToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Handle