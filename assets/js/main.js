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

  // ===== FORM CONTACT (Cloudflare Pages + Resend) =====
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");

  if (!form) return;

  successMessage.style.display = "none";
  errorMessage.style.display = "none";

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = form.name.value;
    const email = form._replyto.value;
    const message = form.message.value;

    try {
      const response = await fetch("/contact", {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });

      let data;
      try {
        data = await response.json();
      } catch {
        data = { status: "error", message: "Empty or invalid JSON response" };
      }

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

