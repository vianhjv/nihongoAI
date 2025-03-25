    
        // Add error styles
        input.classList.add('error-input');
        
        // Insert error message after input
        formControl.insertBefore(errorMessage, input.nextSibling);
    }
    
    // Remove error message
    function removeError(input) {
        const formControl = input.parentElement;
        const errorMessage = formControl.querySelector('.error-message');
        
        if (errorMessage) {
            formControl.removeChild(errorMessage);
        }
        
        input.classList.remove('error-input');
    }
});

// Add error message styles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .error-input {
            border: 1px solid var(--error-color) !important;
            background-color: rgba(239, 71, 111, 0.05);
        }
        
        .error-message {
            color: var(--error-color);
            font-size: 0.8rem;
            margin-top: 0.3rem;
            margin-bottom: 0.5rem;
        }
        
        .success-message {
            text-align: center;
            padding: 2rem;
            background-color: rgba(6, 214, 160, 0.1);
            border-radius: var(--radius-lg);
            color: var(--success-color);
        }
        
        .success-message i {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .success-message h3 {
            margin-bottom: 0.5rem;
            color: var(--success-color);
        }
    </style>
`);

// Animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to elements when they enter the viewport
    const fadeElements = document.querySelectorAll('.feature-card, .course-card, .testimonial-card, .pricing-card');
    
    // Create an IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe each element
    fadeElements.forEach(element => {
        element.classList.add('fade-element');
        observer.observe(element);
    });
});

// Add animation styles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .fade-element {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
`);

// Active section highlighting in navbar
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});