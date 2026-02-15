// ===== FORMULAIRE RESEND =====
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

if (form) {
  successMessage.style.display = 'none';
  errorMessage.style.display = 'none';

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {   // <-- URL corrigée
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      let data;
      try {
        data = await response.json();
      } catch {
        data = { status: 'error', message: 'Empty or invalid JSON response' };
      }

      if (response.ok && data.status === 'success') {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        form.reset();
      } else {
        throw new Error(data.message || 'Unknown error');
      }

    } catch (err) {
      errorMessage.style.display = 'block';
      errorMessage.textContent = '❌ Error: ' + err.message;
      successMessage.style.display = 'none';
    }
  });
}
