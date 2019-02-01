let cursor = document.getElementById("cursor");
let dot = document.querySelector(".cursor-dot");
let circle = document.querySelector(".cursor-circle");
let link = document.querySelectorAll('[data-hover]');

let setCursorPosition = function (e) {
    dot.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px)";
    circle.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px)";
};

document.addEventListener("mousemove", e => setCursorPosition(e));

link.forEach(function (item) {
    item.addEventListener("mousedown", function (e) {
        cursor.classList.add("cursor-down");
    });
    item.addEventListener("mouseup", function (e) {
        cursor.classList.remove("cursor-down");
    });
    item.addEventListener("mouseenter", function (e) {
        cursor.classList.add("cursor-enter");
    });
    item.addEventListener("mouseleave", function (e) {
        cursor.classList.remove("cursor-enter");
    });
});

