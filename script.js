let hamburger = document.getElementById('hamburger-menu');
let navbar = document.getElementById('nav-bar');

hamburger.addEventListener('click', () => {
    if(navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
})