function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

const button = document.getElementById("hamburgerButton");
button.onclick = toggleMenu;