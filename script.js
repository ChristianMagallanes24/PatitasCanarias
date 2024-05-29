document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon"),
        navMenu = document.getElementById("nav-menu");

        menuIcon.addEventListener("click", function(){
            navMenu.classList.toggle("active");
        })
});