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