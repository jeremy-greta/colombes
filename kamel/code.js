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
condition?si true:si false;

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

// V1
let rejouer;
while(rejouer!="non"){
    const résultat = Math.floor(Math.random() * (11 - 0) + 0);
    let saisie = prompt("Choisir un nombre entre 0 et 10:");
    while (résultat != saisie) {
        if (saisie > 10) {
            saisie = prompt("Mauvaise réponse! Entre 0 et 10!!:");
        } else if (saisie > résultat) {
            saisie = prompt("Mauvaise réponse! Plus petit:");
        } else if (saisie < résultat) {
            saisie = prompt("Mauvaise réponse! Plus grand:");
        } else if (saisie = false) {
            alert("Au revoir!");
        }
    }
    }
    if ( confirm( "Rejouer?" ) ) {
        rejouer="oui";
    } else {
        rejouer="non";
        alert("Au revoir!");
    }
}


// V2



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