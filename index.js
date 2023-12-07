/* //////Navbar/////////*/

// icons.addEventListener("click", () => {
//   navbar.classList.toggle("active");
// });

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

const light = document.documentElement;
light.addEventListener('mousemove', e =>{
    light.style.setProperty('--x', e.clientX +'px')
    light.style.setProperty('--y', e.clientY +'px')
});

// On récupère les titres
const viewMore = document.querySelectorAll(".view-more");
// On récupère les cartes
const criminuls = document.querySelectorAll(".criminul");

viewMore.forEach(element => {
    element.addEventListener('click', (e) => {
        // On récupère l'id de l'élément clické
        const titleId = e.target.id;
        
        //  On affiche l'histoire de l'élément en question
        switch(titleId) {
            case "history1":
                criminuls[0].classList.toggle("active");
                break;
            case "history2":
                criminuls[1].classList.toggle("active");
                break;
            case "history3":
                criminuls[2].classList.toggle("active");
                break;
        }
    });
});

// Cacher l'histoire lorsque l'ulisateur clique dessus
criminuls.forEach(element => {
    element.addEventListener('click', (e) => {
        if(e.target.classList.contains("more")) e.target.parentNode.classList.toggle("active");
    })
})

// PAGE PRINCIPALE
// On récupère les boutons
const hButtons = document.querySelectorAll(".Hbutton");

// On récupère la popup
fullStory = document.querySelector(".full-story");

// On leur ajoute un eventListener 'click'
hButtons.forEach(hButton => {
  hButton.addEventListener('click', () => {
    fullStory.classList.add("active");
  })

  // On récupère le button de fermeture
  const close = document.querySelector(".close");

  // On lui ajoute un eventListenr 'click'
  close.addEventListener('click', () => {
    fullStory.classList.remove("active");
  })
});

// Histoire

const cases = document.querySelectorAll(".Simgcase");

cases.forEach(cose => {
  cose.addEventListener('click', (e) => {
    e.target.parentNode.classList.add("active");
  })
});

const opens = document.querySelectorAll(".Shide");

opens.forEach(opan => {
  opan.addEventListener('click', (e) => {
    e.target.parentNode.classList.remove("active");
  })
});

// Button suspect

const suspect = document.querySelectorAll(".Ssrc1");

suspect.forEach(saspect => {
  saspect.addEventListener('click', (e) => {
    e.target.parentNode.classList.add("active");
  })
});

const hist = document.querySelectorAll(".Sfaits");

hist.forEach(hest => {
  hest.addEventListener('click', (e) => {
    e.target.parentNode.classList.remove("active");
  })
});

// Button inspecteur

const inspect = document.querySelectorAll(".Ssrc2");

inspect.forEach(anspect => {
  anspect.addEventListener('click', (e) => {
    e.target.parentNode.classList.add("active");
  })
});

const desc = document.querySelectorAll(".Srecaps");

desc.forEach(disc => {
  disc.addEventListener('click', (e) => {
    e.target.parentNode.classList.remove("active");
  })
});