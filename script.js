// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Registration form
  const regForm = document.getElementById("tournament-form");
  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for registering for the tournament!");
      regForm.reset();
    });
  }

  // Membership form
  const memberForm = document.getElementById("member-form");
  if (memberForm) {
    memberForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("You have successfully joined the LCAFE membership!");
      memberForm.reset();
    });
  }

  // Contact form
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your message has been sent. Thank you for contacting us!");
      contactForm.reset();
    });
  }
});
