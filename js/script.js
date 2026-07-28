// ==========================================
// QrHacker v1.0
// Main JavaScript File
// ==========================================

console.log("Welcome to QrHacker v1.0 🚀");
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));
/* ==========================================
   Mobile Menu
========================================== */

const mobileMenu = document.getElementById("mobile-menu");

const navLinks = document.getElementById("nav-links");

mobileMenu.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
/* ==========================================
   Back To Top
========================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.style.display = "flex";

    }else{

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});