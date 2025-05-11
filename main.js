// BURGER
const burger = document.getElementById('burger');
const nav = document.querySelector('.navbar');
burger.addEventListener('click', () => {
  nav.classList.toggle('show');
  burger.classList.toggle('open');
});


/////////
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rx = (-y / rect.height * 15).toFixed(2) + 'deg';
    const ry = (x / rect.width * 15).toFixed(2) + 'deg';
    card.style.setProperty('--rx', rx);
    card.style.setProperty('--ry', ry);
    card.classList.add('tilt');
  });
  card.addEventListener('mouseleave', () => card.classList.remove('tilt'));
});

// SCROLL 
const observer = new IntersectionObserver(entries => {
  entries.forEach(el => el.isIntersecting && el.target.classList.add('visible'));
}, { threshold: .15 });
document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
document.querySelectorAll('.card').forEach(el => {
  el.classList.add('reveal');  
  observer.observe(el);         
});

