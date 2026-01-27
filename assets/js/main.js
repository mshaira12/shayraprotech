document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav ul');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    navMenu.classList.toggle('active');
  });

  document.addEventListener('click', function () {
    navMenu.classList.remove('active');
  });

  navMenu.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});
