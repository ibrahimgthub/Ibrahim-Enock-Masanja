// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
  
  if (body.classList.contains('light-theme')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌓';
  }
});

// Mobile Hamburger Menu Functionality
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-item');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu automatically when a link is clicked
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});