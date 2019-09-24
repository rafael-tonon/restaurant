const nav = document.getElementById("nav");
const menu = document.getElementById("menu-toggle");
const toggler = document.getElementById("toggler");

toggler.addEventListener("click", e => {
    if (nav.classList.contains("translated")){
        nav.style.transform = "translate(5%)";
        nav.classList.remove("translated");
    } else {
        nav.style.transform = "translate(100%)";
        nav.classList.add("translated");
    }
});