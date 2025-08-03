// Create stars
const starsContainer = document.getElementById('stars-container');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = `${Math.random() * 3 + 1}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 4}s`;
    starsContainer.appendChild(star);
}

// Mobile menu toggle
const menuButton = document.getElementById('mobile-menu-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking
            if (!menu.classList.contains('hidden') && window.innerWidth < 768) {
                menu.classList.add('hidden');
            }
        }
    });
});

// Registration button functionality
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', () => {
        alert('Registration will open soon! Please check back later.');
    });
});

// Close mobile menu when clicking on links
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            menu.classList.add('hidden');
        }
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('bg-opacity-95');
    } else {
        nav.classList.remove('bg-opacity-95');
    }
});
