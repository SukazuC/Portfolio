// BURGER
const burger = document.getElementById('burger');
const nav = document.querySelector('.navbar');
burger.addEventListener('click', () => {
  nav.classList.toggle('show');
  burger.classList.toggle('open');
});

