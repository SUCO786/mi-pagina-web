// ================================
// MENÚ RESPONSIVO
// ================================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Cerrar el menú cuando se selecciona una opción

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// ================================
// ANIMACIÓN AL HACER SCROLL
// ================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    observer.observe(section);
});


// ================================
// MENSAJE DE BIENVENIDA
// ================================

window.addEventListener("load", () => {

    console.log("Bienvenido a mi página web personal");

});


// ================================
// EFECTO EN LAS HABILIDADES
// ================================

const skills = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.transition = "width 1.5s ease";

            }

        });

    },
    {
        threshold: 0.5
    }
);

skills.forEach(skill => {
    skillObserver.observe(skill);
});