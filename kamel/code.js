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

console.log("Le max est: " + max(0, 1));

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function max(a,b) {
    return((a>b)?a:b);
}

//version courte
const max = function (a,b) {
    return((a>b)?a:b);
}

//EXO

const mult = function(valeur1,valeur2){
    return valeur1*valeur2;
}

mult(2,5)

function puiss(x, y) {
    let resultat = 1
    for (let i = 0; i < y; i++) {
        resultat = mult(resultat, x);
    }
    return resultat
}

puiss(2,8);

//Fontion simplifié

const mult = (x,y) => x*y; //(x,y) => x*y  literal de fonction
//pas besoin de "return"
mult(2,5)

//Exemple
const logPerso = (prefixe) => (message) => console.log(prefixe + message);
//ou
const logPerso = prefixe => message => console.log(prefixe + message);
const myApplog = logPerso("[myApp] ");
myApplog("Hello!");


//TABLEAUX

const t=[1,2,3,4];     //assignation d'un tableau
t.length               //nombre d'index du tableau
const premier = t[0];  //assignation de la première valeur du tableau dans une variable
t[1]=10;               //modification de la 2ème valeur du tableau
t.push(11);            //ajout d'une nouvelle valeur à la suite du tableau

//EXO1

//v1
const t = ["Hello", "chacun", "chacune", "!"];
for (let i = 0; i < t.length; i++) {
    console.log(t[i]);    
};

//v2
function lister(tab){
    for (let i = 0; i < tab.length; i++) {
        console.log(tab[i]);    
    };
};
const t = ["Hello", "chacun", "chacune", "!"];
lister(t);

//v3
const lister = tab => {
    for (let i = 0; i < tab.length; i++) {
        console.log(tab[i]);
    }
};
const t = ["Hello", "chacun", "chacune", "!"];
lister(t);


//EXO2

//v1
const lister_x2 = tab => {
    let tab2 = [];
    for (let i = 0; i < tab.length; i++) {
        tab2.push(tab[i] *2);
    }
    console.log(tab2);
};
const t = [1,2,3,4,5,6,7,8,9,10];
lister_x2(t);

//v2
const lister_xX = (tab,coef) => {
    let tab2 = [];
    for (let i = 0; i < tab.length; i++) {
        tab2.push(tab[i] *coef);
    }
    console.log(tab2);
};
const t = [1,2,3,4,5,6,7,8,9,10];
lister_xX(t,5);
