document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menuBtn');
    const navItems = document.getElementById('nav-items');
    let menuOpen = false;
    menu.onclick = () => {
        if(!menuOpen) {
            navItems.style.left = "0"
            menu.classList.add('open');
            menuOpen = true;
        } else {
            navItems.style.left = "-390px"
            menu.classList.remove('open');
            menuOpen = false;
        }
    };
});