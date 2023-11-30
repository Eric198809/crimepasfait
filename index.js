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
