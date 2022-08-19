const hb = document.querySelector(".hb");
const navMenu = document.querySelector(".nav-menu");

hb.addEventListener("click", () => {
    hb.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hb.classList.remove("active");
    navMenu.classList.remove("active");
}))