// Alerte
alert("salut tout le monde!");

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

