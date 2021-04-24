const navbar = document.querySelector('.navbar');

if (window) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
      navbar.classList.add('shadow');
    } else {
      navbar.classList.remove('shadow');
    }
  });
}
