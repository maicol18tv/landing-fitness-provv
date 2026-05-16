console.log("Landing Fitness Pro iniciada");

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Formulario enviado correctamente");

});

/* EFECTO NAVBAR */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background = "#111";

    }else{

        navbar.style.background = "#000";

    }

});