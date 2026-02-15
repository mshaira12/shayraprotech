document.addEventListener("DOMContentLoaded", function () {
  // ===== HAMBURGER MENU =====
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav ul');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', e => { e.stopPropagation(); navMenu.classList.toggle('active'); });
    document.addEventListener('click', () => navMenu.classList.remove('active'));
    navMenu.addEventListener('click', e => e.stopPropagation());
  }

  // ===== FORM CONTACT (Resend) =====
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");

  if (!form) return;

  successMessage.style.display = "none";
  errorMessage.style.display = "none";

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const lang = document.documentElement.lang || "en"; // Assure-toi que <html lang="en"> / fr / ar
    const apiPath = `/api/${lang}-contact`;

    try {
      const response = await fetch(apiPath, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });

      let data;
      try { data = await response.json(); } 
      catch { data = { status: "error", message: "Empty or invalid JSON response" }; }

      if (response.ok && data.status === "success") {
        successMessage.style.display = "block";
        errorMessage.style.display = "none";
        form.reset();
      } else {
        throw new Error(data.message || "Unknown error");
      }
    } catch (err) {
      errorMessage.style.display = "block";
      errorMessage.textContent = "❌ Error: " + err.message;
      successMessage.style.display = "none";
    }
  });
});
