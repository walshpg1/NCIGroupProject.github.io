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

    // Apply the saved theme from localStorage
    body.className = localStorage.getItem("theme") || "light-mode";
    themeToggle.textContent = body.className === "dark-mode" ? "🌞" : "🌛";

    // Toggle the theme and save it to localStorage
    themeToggle.onclick = function () {
        var newTheme = body.className === "dark-mode" ? "light-mode" : "dark-mode";
        body.className = newTheme;
        themeToggle.textContent = newTheme === "dark-mode" ? "🌞" : "🌛";
        localStorage.setItem("theme", newTheme);
    };

    // Sync across windows
    window.addEventListener("storage", function () {
        body.className = localStorage.getItem("theme") || "light-mode";
        themeToggle.textContent = body.className === "dark-mode" ? "🌞" : "🌛";
    });
};