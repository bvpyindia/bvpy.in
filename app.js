// BVPY Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    // Smooth Scrolling for Navigation Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !phone || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            if (!isValidPhone(phone)) {
                showNotification('Please enter a valid phone number.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('Thank you! Your message has been sent successfully. We will contact you soon.', 'success');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Application Status Checker
    const checkStatusBtn = document.getElementById('checkStatus');
    const appIdInput = document.getElementById('appId');
    const statusResult = document.getElementById('statusResult');
    
    if (checkStatusBtn && appIdInput && statusResult) {
        checkStatusBtn.addEventListener('click', function() {
            const appId = appIdInput.value.trim();
            
            if (!appId) {
                showNotification('Please enter your application ID.', 'error');
                return;
            }
            
            // Simulate status check
            checkStatusBtn.textContent = 'Checking...';
            checkStatusBtn.disabled = true;
            statusResult.classList.add('hidden');
            
            setTimeout(() => {
                // Mock status responses
                const statuses = [
                    {
                        status: 'Under Review',
                        message: 'Your application is currently under review. You will be notified once the review is complete.',
                        class: 'status--info'
                    },
                    {
                        status: 'Approved',
                        message: 'Congratulations! Your application has been approved. Please check your email for further instructions.',
                        class: 'status--success'
                    },
                    {
                        status: 'Pending Documents',
                        message: 'Your application is pending. Please submit the required documents to proceed.',
                        class: 'status--warning'
                    },
                    {
                        status: 'Interview Scheduled',
                        message: 'Your interview has been scheduled for next week. Check your email for details.',
                        class: 'status--info'
                    }
                ];
                
                const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
                
                statusResult.innerHTML = `
                    <div class="status ${randomStatus.class}">
                        <strong>Status: ${randomStatus.status}</strong>
                    </div>
                    <p style="margin-top: 12px;">${randomStatus.message}</p>
                `;
                
                statusResult.classList.remove('hidden');
                checkStatusBtn.textContent = 'Check Status';
                checkStatusBtn.disabled = false;
            }, 1500);
        });
    }

    // Countdown Timer
    function initCountdown() {
        // Set exam date (example: 3 months from now)
        const examDate = new Date();
        examDate.setMonth(examDate.getMonth() + 3);
        examDate.setDate(15); // 15th of the month
        examDate.setHours(10, 0, 0, 0); // 10:00 AM
        
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        
        if (daysElement && hoursElement && minutesElement) {
            function updateCountdown() {
                const now = new Date().getTime();
                const timeLeft = examDate.getTime() - now;
                
                if (timeLeft > 0) {
                    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                    
                    daysElement.textContent = days.toString().padStart(2, '0');
                    hoursElement.textContent = hours.toString().padStart(2, '0');
                    minutesElement.textContent = minutes.toString().padStart(2, '0');
                } else {
                    daysElement.textContent = '00';
                    hoursElement.textContent = '00';
                    minutesElement.textContent = '00';
                }
            }
            
            // Update countdown immediately and then every minute
            updateCountdown();
            setInterval(updateCountdown, 60000);
        }
    }

    // Initialize countdown timer
    initCountdown();

    // Scroll animations for cards
    function animateOnScroll() {
        const cards = document.querySelectorAll('.card, .benefit-card, .step-card, .stream-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }

    // Initialize scroll animations
    animateOnScroll();

    // Active navigation link highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }

    updateActiveNavLink();

    // Apply Now button functionality
    const applyButtons = document.querySelectorAll('.btn:contains("Apply Now"), .hero-actions .btn--primary');
    applyButtons.forEach(button => {
        if (button.textContent.includes('Apply Now')) {
            button.addEventListener('click', function() {
                // Simulate application redirect
                showNotification('Redirecting to application portal...', 'info');
                setTimeout(() => {
                    window.open('https://www.bvpy.in', '_blank');
                }, 1000);
            });
        }
    });

    // Learn More button functionality
    const learnMoreButtons = document.querySelectorAll('.btn--outline');
    learnMoreButtons.forEach(button => {
        if (button.textContent.includes('Learn More')) {
            button.addEventListener('click', function() {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = aboutSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });

    // Utility Functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{9,14}$/;
        return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
    }

    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close" aria-label="Close notification">&times;</button>
            </div>
        `;
        
        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            padding: 16px 20px;
            max-width: 400px;
            z-index: 9999;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            border-left: 4px solid ${getNotificationColor(type)};
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto-close after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    function getNotificationColor(type) {
        const colors = {
            'success': '#10B981',
            'error': '#EF4444',
            'warning': '#F59E0B',
            'info': '#3B82F6'
        };
        return colors[type] || colors.info;
    }

    // Keyboard navigation for FAQ
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });

    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Lazy loading for better performance
    const lazyElements = document.querySelectorAll('[data-lazy]');
    if ('IntersectionObserver' in window) {
        const lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.classList.add('loaded');
                    lazyObserver.unobserve(element);
                }
            });
        });

        lazyElements.forEach(element => {
            lazyObserver.observe(element);
        });
    }

    // Add loading states for interactive elements
    function addLoadingState(element, duration = 2000) {
        const originalText = element.textContent;
        element.classList.add('loading');
        element.disabled = true;
        
        setTimeout(() => {
            element.classList.remove('loading');
            element.disabled = false;
            element.textContent = originalText;
        }, duration);
    }

    // Initialize tooltips for document icons
    const docIcons = document.querySelectorAll('.doc-icon');
    docIcons.forEach(icon => {
        icon.setAttribute('title', 'Required Document');
    });

    // Add accessibility improvements
    function improveAccessibility() {
        // Add ARIA labels to interactive elements
        const interactiveElements = document.querySelectorAll('button, a, input, textarea, select');
        interactiveElements.forEach(element => {
            if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
                const text = element.textContent || element.value || element.placeholder;
                if (text) {
                    element.setAttribute('aria-label', text.trim());
                }
            }
        });

        // Add skip link for keyboard navigation
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #000;
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10000;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    improveAccessibility();

    console.log('BVPY Website loaded successfully! 🎓');
});