document.addEventListener("DOMContentLoaded", function () {
  // ===== HAMBURGER MENU =====
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav ul');

  if (hamburger && navMenu) {
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
  }

  // ===== FORM SPREE =====
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  const errorMessage = document.getElementById('errorMessage');

  if (!form) return;

  successMessage.style.display = 'none';
  errorMessage.style.display = 'none';

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        form.reset();
      } else {
        throw new Error();
      }
    })
    .catch(() => {
      errorMessage.style.display = 'block';
      successMessage.style.display = 'none';
    });
  });
});
