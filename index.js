/* //////Navbar/////////*/

icons.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

const links = document.querySelectorAll("navbar li");

links.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

/* //////Fin Navbar/////////*/
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}

// const light = document.documentElement;
// light.addEventListener('mousemove', e =>{
//     light.style.setProperty('--x', e.clientX +'px')
//     light.style.setProperty('--y', e.clientY +'px')
// });
