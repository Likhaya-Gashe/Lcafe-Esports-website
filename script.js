
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
  // Firebase import
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDvLACQSfkE1oiFZaFvt9qthQWWoy7gLRg",
    authDomain: "lcafe-esports.firebaseapp.com",
    projectId: "lcafe-esports",
    storageBucket: "lcafe-esports.appspot.com",
    messagingSenderId: "228775173156",
    appId: "1:228775173156:web:550714489b0448c4a1ccb1",
    measurementId: "G-GYYWNBCNRS"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Example: Hooking into the Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = contactForm['name'].value;
      const email = contactForm['email'].value;
      const message = contactForm['message'].value;

      try {
        await addDoc(collection(db, "contactMessages"), {
          name,
          email,
          message,
          timestamp: serverTimestamp()
        });
        alert("Message sent successfully!");
        contactForm.reset();
      } catch (error) {
        console.error("Error sending message: ", error);
        alert("Failed to send message.");
      }
    });
  }

  await addDoc(collection(db, "registrations"), {
  fullname,
  game,
  email,
  phone,
  timestamp: serverTimestamp()
});

await addDoc(collection(db, "memberships"), {
  name,
  email,
  plan,
  joinDate: serverTimestamp()
});

await addDoc(collection(db, "signups"), {
  username,
  password,
  email,
  signupDate: serverTimestamp()
});

