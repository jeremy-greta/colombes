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