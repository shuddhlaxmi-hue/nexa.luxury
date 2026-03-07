// NEXA.LUXURY - JAVASCRIPT
// Interactive elements and animations

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================
    // STARFIELD BACKGROUND
    // ============================
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Star class
    class Star {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random();
            this.twinkleSpeed = Math.random() * 0.02;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            
            this.opacity += this.twinkleSpeed;
            if (this.opacity > 1 || this.opacity < 0) {
                this.twinkleSpeed *= -1;
            }
        }
        
        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create stars
    const stars = [];
    const starCount = Math.min(window.innerWidth / 5, 200);
    
    for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        stars.forEach(star => {
            star.update();
            star.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // ============================
    // NAVIGATION
    // ============================
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Scroll effect for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (navToggle) {
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu.classList.contains('active')) {
            if (!event.target.closest('.navbar')) {
                navMenu.classList.remove('active');
                if (navToggle) {
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            }
        }
    });
    
    // ============================
    // SMOOTH SCROLL WITH OFFSET
    // ============================
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ============================
    // INTERSECTION OBSERVER
    // Animate elements on scroll
    // ============================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const animatedElements = document.querySelectorAll(
        '.content-card, .comparison-card, .supply-card, .div-card, ' +
        '.halving-card, .benefit-card, .info-box, .key-insight, ' +
        '.explanation-card, .equation-box'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ============================
    // COUNTER ANIMATION
    // Animate numbers on scroll
    // ============================
    const counters = document.querySelectorAll('.stat-value, .supply-number');
    
    function animateCounter(element) {
        const target = element.textContent;
        
        // Check if it contains numbers
        if (!/\d/.test(target)) return;
        
        const hasNumber = target.match(/[\d,.]+/);
        if (!hasNumber) return;
        
        const numberString = hasNumber[0].replace(/,/g, '');
        const targetNumber = parseFloat(numberString);
        
        if (isNaN(targetNumber)) return;
        
        const duration = 2000;
        const steps = 60;
        const increment = targetNumber / steps;
        let current = 0;
        let step = 0;
        
        const timer = setInterval(() => {
            step++;
            current += increment;
            
            if (step >= steps) {
                current = targetNumber;
                clearInterval(timer);
            }
            
            // Format the number
            let formattedNumber;
            if (target.includes('Trillion')) {
                formattedNumber = Math.round(current) + ' Trillion';
            } else if (target.includes('Million')) {
                formattedNumber = Math.round(current) + ' Million';
            } else if (target.includes('%')) {
                formattedNumber = Math.round(current) + '%';
            } else {
                formattedNumber = current.toLocaleString('en-US', {
                    maximumFractionDigits: 0
                });
            }
            
            // Update only the number part
            if (target.includes('Trillion')) {
                element.textContent = formattedNumber;
            } else if (target.includes('Million')) {
                element.textContent = formattedNumber;
            } else {
                element.textContent = target.replace(/[\d,.]+/, formattedNumber);
            }
        }, duration / steps);
    }
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
    
    // ============================
    // PARALLAX EFFECT
    // Subtle parallax on scroll
    // ============================
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-content');
        
        parallaxElements.forEach(el => {
            const speed = 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // ============================
    // TOOLTIP FUNCTIONALITY
    // For additional info on hover
    // ============================
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            
            this._tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this._tooltip) {
                this._tooltip.remove();
                delete this._tooltip;
            }
        });
    });
    
    // ============================
    // PERFORMANCE OPTIMIZATION
    // Reduce animations on low-end devices
    // ============================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable complex animations
        document.body.style.scrollBehavior = 'auto';
        stars.length = Math.min(50, stars.length); // Reduce star count
    }
    
    // ============================
    // LAZY LOADING IMAGES
    // If any images are added later
    // ============================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ============================
    // CONSOLE MESSAGE
    // Easter egg for developers
    // ============================
    console.log('%c Welcome to Nexa.luxury! ', 'background: linear-gradient(135deg, #efc426 0%, #b87c27 100%); color: #05070a; font-size: 20px; padding: 10px; font-weight: bold;');
    console.log('%c Built with ❤️ for the Nexa community ', 'color: #efc426; font-size: 14px;');
    
});
