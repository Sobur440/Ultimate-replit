let Hamburger = document.querySelector(".hamburger")
let Menu = document.querySelector(".menu")
let width = screen.width

Hamburger.addEventListener("click", rotate)
Menu.addEventListener("click", poof)

function rotate() {
  Hamburger.classList.toggle("active")
  Menu.classList.toggle("active")
}

function poof() {
  Menu.classList.remove("active")
  Hamburger.classList.remove("active")
}
function page() {
  if (width >= 1400) {
    alert("This website was only created for phones so its not responsive so use your phone")
  }
}
console.log(width)