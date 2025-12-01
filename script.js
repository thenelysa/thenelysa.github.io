// Dark / Light Toggle
function toggleTheme() {
    document.body.classList.toggle("light");
}

// Scroll progress bar
window.addEventListener("scroll", () => {
    const scrollBar = document.getElementById("scrollBar");
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    scrollBar.style.width = `${(scrolled / height) * 100}%`;
});

// Hamburger Menu
const hamburger = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
});

// Close menu when clicking a link
document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("active");
    });
});
window.addEventListener("scroll", function() {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 20) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

