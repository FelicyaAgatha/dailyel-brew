// Menutup menu navigasi HP setelah tautan diklik.
document.querySelectorAll("#navbarNav a").forEach(function (link) {
    link.addEventListener("click", function () {
        const menu = document.getElementById("navbarNav");

        if (menu.classList.contains("show") && window.bootstrap) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});