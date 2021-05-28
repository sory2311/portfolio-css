let btnOpen = document.querySelector(".open");
let btnClose = document.querySelector(".close");

btnOpen.addEventListener("click", () => {
    document.getElementById("sidebar").style.width = "100%";
});

btnClose.addEventListener("click", () => {
    document.getElementById("sidebar").style.width = "0";
});