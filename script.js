// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 120) {
            el.classList.add('active');
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Custom Cursor
const cursor = document.createElement("div");
cursor.classList.add("cursor-dot");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Scroll Progress Bar
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById("scrollBar").style.width = scrollPercent + "%";
});

// Light/Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("light");

    // Save mode
    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}

// Load saved mode
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
}
