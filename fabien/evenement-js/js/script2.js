// Script js pour la gestion des événements

let Cmptr=0;
let NomElement="";
let ConteneurHtml = document.getElementById("Conteneur");
let TblClique = Array.from(document.querySelectorAll(".myDiv"));

for (Cmptr=0;Cmptr<TblClique.length;Cmptr++){
    TblClique[Cmptr].addEventListener('click', OnClick);
}

function OnClick(event) {
    let Indice = TblClique.indexOf(event.currentTarget);
    if (Indice != -1){
        NomElement = TblClique[Indice].textContent;
        alert('Elément cliqué: ' + NomElement);
    };
}