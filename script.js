document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hidden');
  
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
  
    elements.forEach(element => {
        observer.observe(element);
    });
  });
  
  // Toggle the navigation menu
  document.querySelector('.nav-toggle').addEventListener('click', function() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('active'); // Toggle the active class
  
      // Add or remove the nav-active class from the body
      document.body.classList.toggle('nav-active', navLinks.classList.contains('active'));
  });
  document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
          const navLinks = document.querySelector('.nav-links');
          navLinks.classList.remove('active'); // Hide the navigation links
          document.body.classList.remove('nav-active'); // Remove nav-active class from body
      }
  });
  
  // Close the navigation menu when clicking outside
  document.addEventListener('click', function(event) {
      const navLinks = document.querySelector('.nav-links');
      const navToggle = document.querySelector('.nav-toggle');
  
      // Check if the click was outside the nav links and the toggle button
      if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
          navLinks.classList.remove('active'); // Hide the navigation links
          document.body.classList.remove('nav-active'); // Remove nav-active class from body
      }
  });
  
  
  // Scroll to Top Button
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.innerHTML = '↑';
  scrollToTopButton.classList.add('scroll-to-top');
  document.body.appendChild(scrollToTopButton);
  
  // Show the button when scrolling down
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
  });
  
  // Scroll to top functionality
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Form Validation (Simple)
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill in all required fields.");
    } else {
        alert("Thank you for reaching out! Your message has been sent.");
    }
  });