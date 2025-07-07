const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

function submitContactForm(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const msg = document.getElementById('message').value;
  db.collection("contacts").add({ name, msg, timestamp: firebase.firestore.FieldValue.serverTimestamp() })
    .then(() => { alert('Thanks!'); })
    .catch(err => alert(err.message));
}