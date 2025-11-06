const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

// Open menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.add('active');
  menuToggle.style.display = 'none'; // hide hamburger
});

// Close menu
closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
  menuToggle.style.display = 'block'; // show hamburger back
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