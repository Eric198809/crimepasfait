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