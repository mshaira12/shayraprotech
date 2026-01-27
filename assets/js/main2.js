document.addEventListener("DOMContentLoaded", function () {

  /* ==============================
     Hamburger Menu MOBILE – FR/EN/AR
  ================================ */
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav ul');

  if (hamburger && navMenu) {

    // Toggle menu au clic sur hamburger
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });

    // Fermer menu si clic en dehors du menu et du bouton
    document.addEventListener('click', function (e) {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  } else {
    console.warn("⚠️ Hamburger ou nav ul introuvable. Vérifie le HTML pour FR/EN/AR.");
  }

  /* ==============================
     Contact Form Submission
  ================================ */
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  const errorMessage = document.getElementById('errorMessage');

  if (contactForm) {
    const submitButton = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const honeypot = contactForm.querySelector('input[name="website"]');
      if (honeypot && honeypot.value) return;

      const formData = new FormData(contactForm);

      submitButton.disabled = true;
      submitButton.style.opacity = '0.6';

      fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          successMessage.style.display = 'block';
          errorMessage.style.display = 'none';
          contactForm.reset();
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
      })
      .finally(() => {
        submitButton.disabled = false;
        submitButton.style.opacity = '1';
      });
    });
  }

});
