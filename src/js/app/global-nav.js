const nav = document.querySelector(".global-nav");
const navToggle = document.querySelector(".global-nav__menu-toggle");

function toggleNav() {
    const isOpen = nav.classList.contains("is-open");

    nav.classList.toggle("is-open", !isOpen);
    nav.classList.toggle("is-closed", isOpen);
    navToggle.setAttribute("aria-expanded", String(!isOpen));
}

navToggle.addEventListener("click", toggleNav);
