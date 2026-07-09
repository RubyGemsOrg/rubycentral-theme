const nav = document.querySelector("[data-global-nav]");
const navToggle = document.querySelector("[data-global-nav-toggle]");

function toggleNav() {
    const isOpen = nav.classList.contains("is-open");

    nav.classList.toggle("is-open", !isOpen);
    nav.classList.toggle("is-closed", isOpen);
    navToggle.setAttribute("aria-expanded", !isOpen);
}

navToggle.addEventListener("click", toggleNav);
