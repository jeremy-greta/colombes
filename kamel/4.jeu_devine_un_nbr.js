// Petit jeu "devine un nombre"

"use strict";
let rejouer = true;
while(rejouer) {
    const résultat = Math.floor(Math.random() * (11 - 0) + 0);
    let saisie = prompt("Choisir un nombre entre 0 et 10:\n[ECHAP] ou Annuler pour quitter");
    while (résultat != saisie && saisie != null) {
        if (saisie > 10 || saisie < 0) {
            saisie = prompt("Entre 0 et 10!!");
        } else if (isNaN(saisie)) {
            saisie = prompt("Ce n'est pas un nombre!!");
        } else if (saisie > résultat) {
            saisie = prompt("Trop Grand!");
        } else if (saisie < résultat) {
            saisie = prompt("Trop petit!");
        } 
    }
    if (saisie == null) {
        rejouer = false;
        alert("Vous avez quitté\n\n     Au revoir!")
    }else if ( !confirm( "\t  BRAVO!\nVoulez-vous rejouer?" ) ) {
            rejouer = false;
            alert("Au revoir!");
}
}