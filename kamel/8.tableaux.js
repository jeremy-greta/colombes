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
