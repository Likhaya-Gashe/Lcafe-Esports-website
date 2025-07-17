
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

// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvLACQSfkE1oiFZaFvt9qthQWWoy7gLRg",
  authDomain: "lcafe-esports.firebaseapp.com",
  projectId: "lcafe-esports",
  storageBucket: "lcafe-esports.appspot.com",
  messagingSenderId: "228775173156",
  appId: "1:228775173156:web:550714489b0448c4a1ccb1",
  measurementId: "G-GYYWNBCNRS"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 📌 Registration Form Submission
document.getElementById("registration-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("reg-name").value;
  const email = document.getElementById("reg-email").value;
  await addDoc(collection(db, "registrations"), { name, email, timestamp: Date.now() });
  alert("Registration submitted!");
});

// 📌 Membership Form
document.getElementById("member-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("member-name").value;
  const email = document.getElementById("member-email").value;
  await addDoc(collection(db, "members"), { name, email, timestamp: Date.now() });
  alert("Membership form submitted!");
});

// 📌 Contact Form
document.getElementById("contact-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("contact-name").value;
  const email = document.getElementById("contact-email").value;
  const message = document.getElementById("contact-message").value;
  await addDoc(collection(db, "contacts"), { name, email, message, timestamp: Date.now() });
  alert("Message sent!");
});
