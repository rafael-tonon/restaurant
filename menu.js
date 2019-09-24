const nav = document.getElementById("nav");
const buttonToggle = document.getElementById("button-toggle");


window.screen.width < 800 ? nav.style.transform = "translate(-100%)" : nav.style.transform = "translate(%0)";
buttonToggle.addEventListener("click", e => {
    nav.style.transform == "translate(-100%)" ? nav.style.transform = "translate(0%)" : nav.style.transform = "translate(-100%)";
});