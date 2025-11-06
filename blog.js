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

// blog
  const imagesBtn = document.getElementById("imagesBtn");
  const videosBtn = document.getElementById("videosBtn");
  const imageGrid = document.getElementById("imageGrid");
  const videoGrid = document.getElementById("videoGrid");

  imagesBtn.addEventListener("click", () => {
    // imageGrid.classList.remove("show")
    // videoGrid.classList.remove("show")
    // imageGrid.classList.add("show")
    // Toggle button style
    imagesBtn.classList.add("active");
    videosBtn.classList.remove("active");

    // Show only images
    imageGrid.style.display = "grid";
    videoGrid.style.display = "none";
  });

  videosBtn.addEventListener("click", () => {
    // Toggle button style
    videosBtn.classList.add("active");
    imagesBtn.classList.remove("active");

    // Show only videos
    imageGrid.style.display = "none";
    videoGrid.style.display = "grid";
  });

  console.log("Gallery buttons ready");
