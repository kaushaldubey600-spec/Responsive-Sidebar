
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", function () {
    sidebar.classList.add("open");
    overlay.classList.add("show");
});

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
});

overlay.addEventListener("click", function () {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
});

// Active Menu

const links = document.querySelectorAll(".sidebar ul li a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        links.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});
