// Generate stars for the hero background
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 150;
   
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
       
        // Random position
        const left = Math.random() * 100;
        const top = Math.random() * 100;
       
        // Random size
        const size = Math.random() * 3;
       
        // Random animation delay
        const delay = Math.random() * 3;
       
        star.style.left = `${left}%`;
        star.style.top = `${top}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
       
        starsContainer.appendChild(star);
    }
}

// Smooth scrolling function
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;
       
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Scroll animations using Intersection Observer
function initScrollAnimations() {
    // Section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
   
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
   
    sectionTitles.forEach(title => {
        observer.observe(title);
    });
   
    // Team subtitle
    const teamSubtitle = document.querySelector('.team-subtitle');
    if (teamSubtitle) {
        observer.observe(teamSubtitle);
    }
   
    // Team cards
    const teamCards = document.querySelectorAll('.team-card');
    const teamObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 100);
            }
        });
    }, observerOptions);
   
    teamCards.forEach(card => {
        teamObserver.observe(card);
    });
   
    // Organizer groups
    const organizerGroups = document.querySelectorAll('.organizer-group');
    const orgObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                   
                    // Animate organizer items within the group
                    const orgItems = entry.target.querySelectorAll('.organizer-item');
                    orgItems.forEach((item, itemIndex) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, itemIndex * 100);
                    });
                }, index * 200);
            }
        });
    }, observerOptions);
   
    organizerGroups.forEach(group => {
        orgObserver.observe(group);
    });
   
    // Motto
    const motto = document.querySelector('.motto');
    if (motto) {
        observer.observe(motto);
    }
   
    // Benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    const benefitObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 150);
            }
        });
    }, observerOptions);
   
    benefitCards.forEach(card => {
        benefitObserver.observe(card);
    });
   
    // Timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 200);
            }
        });
    }, observerOptions);
   
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
   
    // Footer
    const footerContent = document.querySelector('.footer-content');
    if (footerContent) {
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);
       
        footerObserver.observe(footerContent);
    }
}

// Set up event listeners that don't depend on images
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
       
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // Add click event listeners to all elements with data-scroll attribute
    document.querySelectorAll('[data-scroll]').forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-scroll');
            smoothScroll(targetId);
        });
    });

    // Back to top button
    document.getElementById('backToTop').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        const backToTop = document.getElementById('backToTop');
       
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.padding = '10px 5%';
            backToTop.classList.add('show');
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.padding = '15px 5%';
            backToTop.classList.remove('show');
        }
    });
});

// Wait for all resources to load
window.addEventListener('load', function() {
    // Hide loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);

    // Initialize stars
    createStars();

    // Initialize animations
    initScrollAnimations();
});