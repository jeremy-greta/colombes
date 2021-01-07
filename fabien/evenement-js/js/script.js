// Script js pour la gestion des événements

let etatDiv01=false;
let etatDiv02=false;
document.getElementById('Bloc02').addEventListener('click', Div02);
document.getElementById('Conteneur').addEventListener('click', Div02);

function Div02(evenement) {
    if (etatDiv02==false) {
        evenement.target.className="divNoire";
        etatDiv02=true;
    }else{
        evenement.target.className="myDiv";
        etatDiv02=false;
    }
}

function Div01(moiMeme){
    if (etatDiv01==false) {
        moiMeme.className="divNoire";
        etatDiv01=true;
    }else{
        moiMeme.className="myDiv";
        etatDiv01=false;
    }
}