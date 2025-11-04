// Mobile Navbar Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


  // about us
 // Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();


// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple alert on form submit
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting Rootway! We'll reach out soon 🌿");
    form.reset();
  });
}