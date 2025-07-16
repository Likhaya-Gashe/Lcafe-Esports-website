// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvLACQSfkE1oiFZaFvt9qthQWWoy7gLRg",
  authDomain: "lcafe-esports.firebaseapp.com",
  projectId: "lcafe-esports",
  storageBucket: "lcafe-esports.firebasestorage.app",
  messagingSenderId: "228775173156",
  appId: "1:228775173156:web:550714489b0448c4a1ccb1",
  measurementId: "G-GYYWNBCNRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// ========== HANDLE FORMS BELOW ==========

// Tournament Registration
document.getElementById('tournament-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    await addDoc(collection(db, "tournament_registrations"), {
      registeredAt: new Date().toISOString()
    });
    alert("✅ You’ve successfully registered for the tournament!");
  } catch (error) {
    alert("⚠️ Error submitting form.");
    console.error(error);
  }
});

// Membership Form
document.getElementById('member-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('member-name').value;
  const email = document.getElementById('member-email').value;
  const school = document.getElementById('member-school').value;
  const gaming = document.getElementById('member-gaming').value;

  try {
    await addDoc(collection(db, "memberships"), {
      name, email, school, gaming,
      joinedAt: new Date().toISOString()
    });
    alert(`🎮 Welcome, ${name}! Your membership is confirmed.`);
  } catch (error) {
    alert("⚠️ Failed to submit membership.");
    console.error(error);
  }
});

// Contact Form
document.querySelector('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  try {
    await addDoc(collection(db, "contact_messages"), {
      name, email, subject, message,
      sentAt: new Date().toISOString()
    });
    alert("✅ Message sent! We'll get back to you soon.");
  } catch (error) {
    alert("⚠️ Failed to send message.");
    console.error(error);
  }
});
