window.onload = function () {
    var menuToggle = document.querySelector(".menu-toggle");
    var menu = document.getElementById("menu");

    menuToggle.onclick = function () {
        if (menu.className === "active") {
            menu.className = "";
        } else {
            menu.className = "active";
        }
    };
};

window.onload = function () {
    var themeToggle = document.querySelector(".theme-toggle");
    var body = document.body;

    themeToggle.onclick = function () {
        if (body.className === "dark-mode") {
            body.className = "light-mode";
            themeToggle.textContent = "🌛";
        } else {
            body.className = "dark-mode";
            themeToggle.textContent = "🌞";
        }
    };
};