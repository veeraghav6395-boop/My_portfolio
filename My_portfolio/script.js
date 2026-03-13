var typed = new Typed("#typing", {

strings:[
"Frontend Developer",
"Web Developer",
"Creative Coder"
],

typeSpeed:70,
backSpeed:40,
loop:true

});

const toggle = document.getElementById("mode-toggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

});