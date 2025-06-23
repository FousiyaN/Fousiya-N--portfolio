// script.js

console.log("✅ script.js loaded");
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";
import { auth } from './firebase.js';

// Firebase Login
window.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert("Login successful!");
          console.log("Logged in user:", userCredential.user.email);
        })
        .catch((error) => {
          alert("Login failed: " + error.message);
          console.error(error.code, error.message);
        });
    });
  }

  // UI Behavior - Navbar and Form popup logic
  const navbarMenu = document.querySelector(".navbar .links");
  const navbarToggleBtn = document.querySelector(".menu-btn");
  const navbarCloseBtn = navbarMenu.querySelector(".close-btn");

  const formPopup = document.querySelector(".form-popup");
  const showPopupBtn = document.querySelector(".login-btn");
  const hidePopupBtn = formPopup.querySelector(".close-btn");

  const loginSignupLinks = document.querySelectorAll(".form-box .bottom-link a");

  navbarToggleBtn?.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
  });

  navbarCloseBtn?.addEventListener("click", () => {
    navbarMenu.classList.remove("show-menu");
  });

  showPopupBtn?.addEventListener("click", () => {
    document.body.classList.add("show-popup");
  });

  hidePopupBtn?.addEventListener("click", () => {
    document.body.classList.remove("show-popup");
  });

  loginSignupLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      formPopup.classList.toggle("show-signup", link.id === "signup-link");
    });
  });
});
