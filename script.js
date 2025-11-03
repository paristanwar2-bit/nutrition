// Mobile Navbar Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// Banner Auto Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000); // changes every 4 seconds


// about us

 function showMessage() {
      alert("Thank you for showing interest! Visit our Shop page for more amazing nutrition products.");
    }

// counter
     const counters = document.querySelectorAll('.counter-number');
    const speed = 200; // smaller = faster

    const animateCounters = () => {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const increment = Math.ceil(target / speed);

          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 30);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    };

    // Trigger animation when visible
    const section = document.querySelector('.counter-section');
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.unobserve(section);
      }
    }, { threshold: 0.4 });

    observer.observe(section);



// Simple hover glow toggle
document.querySelectorAll(".pricing-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("active");
  });
  card.addEventListener("mouseleave", () => {
    card.classList.remove("active");
  });
});





  // about us 
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







// shop
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



