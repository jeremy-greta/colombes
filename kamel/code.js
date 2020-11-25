// Page Blanche
about:blank

// Alerte
alert("salut tout le monde!");

// Boite de dialogue
prompt

// declaration de variable
let a="10";
let b="14";
let temp=a;

// échanger les valeurs de a et b
a=b; //on assigne le résultat de l'évaluation de l'expression (a à tampon)
b=tampon;
// écrire le résultat dans la console
console.log("la valeur de la 1ère variable = "+a);
console.log("la valeur de la 2ème variable = "+b);
//    /^\__opérateur d'indirection


// STRING "..." '...' `...`
const nom="Michu";
const message=`Bonjour ${nom}!`; //${nom} : template string
console.log(message);
//échappement de caractère : \
const message="Il m'a dit \"Chut!\""; // le caractère " n'est pas pris en compte par JS
/*
\s saut de ligne
\t tabulation
*/ 


//Opérateur typeOf
const message="....";
typeof(message); //retourne "string"


// Conditions
//1
condition?true:false;

//2
if (condition) {
    
}

//3
if (condition) {
    
} else {
    
}

//4
if (condition) {
    
} else if (condition) {
    
} else if (condition) {
    
}


// Petit jeu "devine un nombre"

"use strict";
let rejouer = true;
while(rejouer) {
    const résultat = Math.floor(Math.random() * (11 - 0) + 0);
    let saisie = prompt("Choisir un nombre entre 0 et 10:\n[ECHAP] ou Annuler pour quitter");
    while (résultat != saisie && saisie != null) {
        if (saisie > 10) {
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


//BOUCLE

//while
while (condition) {
    
}

//do
do {
    
} while (condition);

//for
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}


//SWITCH

let choix = 2;
switch (choix) {
    case 0:
        console.log("case 0");
    case 1:
        console.log("case 1");
    case 2:
        console.log("case 2");
    case 3:
        console.log("case 3");
    default:
        console.log("default");
}

switch (choix) {
    case 0:
        console.log("case 0");
        break;
    case 0:
        console.log("case 0");
        break;

    default:
        break;
}

//FOR

let vari = 0
while (vari <= 20) {
    console.log(vari);    
    vari = vari +2;
}

for (let vari = 0; vari <= 20; vari+=2) {
    console.log(vari);  
}


//FONCTION

function max(a,b) {
    let resultat;
    if (a>b) {
        resultat = a;
    } else {
        resultat = b;
    }
    return resultat;
}

console.log("Le max est: "+max(0,1));

function max(a,b) {
    if (a>b) {
        return a;
    } else {
        return b;
    }
}

function max(a,b) {
    return((a>b)?a:b);
}