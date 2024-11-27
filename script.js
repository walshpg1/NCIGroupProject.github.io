window.onload = function () {
    // Menu Toggle Logic
    var menuToggle = document.querySelector(".menu-toggle");
    var menu = document.getElementById("menu");

    menuToggle.onclick = function () {
        if (menu.className === "active") {
            menu.className = "";
        } else {
            menu.className = "active";
        }
    }
};

window.onload = function () {
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;
    
    // Load saved theme from localStorage or set to light mode
    const savedTheme = localStorage.getItem("theme") || "light-mode";
    body.className = savedTheme;
    themeToggle.textContent = savedTheme === "dark-mode" ? "🌞" : "🌛";
    
    // Toggle theme on button click
    themeToggle.onclick = function () {
        if (body.className === "dark-mode") {
            body.className = "light-mode";
            themeToggle.textContent = "🌛";
                localStorage.setItem("theme", "light-mode"); 
        } else {
            body.className = "dark-mode";
            themeToggle.textContent = "🌞";
            localStorage.setItem("theme", "dark-mode"); 
        }
    };
};
