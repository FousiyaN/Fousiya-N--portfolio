<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";

  // Your Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyCbiu0amC4slU5tOUZCfbeJDP9SM-QnbcM",
    authDomain: "authentication-8ccac.firebaseapp.com",
    projectId: "authentication-8ccac",
    storageBucket: "authentication-8ccac.firebasestorage.app",
    messagingSenderId: "92317622148",
    appId: "1:92317622148:web:2fb7d1306f6d74153ac7d1",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Wait until the DOM is fully loaded
  window.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // prevent page reload
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        alert("Email: " + email + "\nPassword: " + password);
        console.log("Submitted Email:", email);
        console.log("Submitted Password:", password);
      });
    } else {
      console.error("Login form not found.");
    }
  });
</script>
