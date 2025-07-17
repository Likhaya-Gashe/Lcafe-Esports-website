
document.addEventListener("DOMContentLoaded", () => {
  // Tournament Registration
  const regForm = document.getElementById("tournament-form");
  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Registration submitted! We'll be in touch soon.");
      regForm.reset();
    });
  }

  // Membership Join
  const memberForm = document.getElementById("member-form");
  if (memberForm) {
    memberForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Membership request received! Welcome to LCAFE.");
      memberForm.reset();
    });
  }

  // Contact Us
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("📨 Thanks for reaching out! We'll respond shortly.");
      contactForm.reset();
    });
  }
});
