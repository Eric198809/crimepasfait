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

/////// Page contact /////////////////////////////////////////////
// Le popup //
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}

// Verification d'age + message si age < 12
function verifierAge() {

  const inputAge = document.getElementById("age");
  const messageParental = document.querySelector(".msg");

  inputAge.addEventListener("input", function() {
    
      const age = parseInt(inputAge.value);

      
      if (age < 12) {
          
          messageParental.style.display = "block";
      } else {
          
          messageParental.style.display = "none";
      }
  });
}

// Max 999 caract dans textarea
function limiterCaracteres() {
  const textarea = document.querySelector("textarea");
  const limiteCaracteres = 999;
  const compteur = document.getElementById("compteurCaracteres");

  textarea.addEventListener("input", function() {
      const texte = textarea.value;

      if (texte.length > limiteCaracteres) {
          textarea.value = texte.slice(0, limiteCaracteres);
      }

      // Mettre à jour le compteur de caractères
      compteur.textContent = `${texte.length}/${limiteCaracteres}`;
  });
}

window.onload = function() {
  limiterCaracteres();
  verifierAge();
};

// lampe torche page contact
const light = document.documentElement;
light.addEventListener('mousemove', e =>{
    light.style.setProperty('--x', e.clientX +'px')
    light.style.setProperty('--y', e.clientY +'px')
});
///////////Fin page contact /////////////////////////////////////////////////

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
// const hButtons = document.querySelectorAll(".Hbutton");

// // On récupère la popup
// fullStory = document.querySelector(".full-story");

// // On leur ajoute un eventListener 'click'
// hButtons.forEach(hButton => {
//   hButton.addEventListener('click', () => {
//     fullStory.classList.add("active");
//   })

//   // On récupère le button de fermeture
//   const close = document.querySelector(".close");

//   // On lui ajoute un eventListenr 'click'
//   close.addEventListener('click', () => {
//     fullStory.classList.remove("active");
//   })
// });