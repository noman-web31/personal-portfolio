let menuIcon = document.getElementById('menu-icon');
let closeIcon = document.getElementById('close-icon');
let nav = document.querySelector('nav');

closeIcon.style.display = 'none';

menuIcon.addEventListener('click', () => {
  nav.classList.add('active');
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  nav.classList.remove('active');
  closeIcon.style.display = 'none';
  menuIcon.style.display = 'block';
});