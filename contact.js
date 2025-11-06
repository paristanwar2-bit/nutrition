// Mobile Navbar Toggle
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



// contact 
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all required fields!");
    return;
  }

  alert("Thank you for contacting us, " + name + "! Your message has been sent successfully.");
  this.reset();
});

