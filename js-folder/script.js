const toggle = document.getElementsByClassName("toggle-button")[0];
const sideBar = document.getElementById("sideBar");

toggle.addEventListener("click", () => {
    sideBar.classList.toggle('aktivni');
} )