// Mobile Navbar Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// shop
// Simple animation or interaction (optional)
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});


// Simple fade-up animation on scroll
const elements = document.querySelectorAll('.why-box, .why-content h2, .cta-btn');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add('fade-up');
    }
  });
});

// FAQ Toggle
document.querySelectorAll('.faq-item h3').forEach((item) => {
  item.addEventListener('click', () => {
    item.parentElement.classList.toggle('active');
  });
});
