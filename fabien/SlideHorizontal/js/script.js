// Script js pour la gestion des événements

const myTitreHTML=document.querySelector('h1');
myTitreHTML.style.position="absolute";

let myTopPosition=0;
let myDirection=-1;
let myNewPosition="";

function myHorizontalSlide() {
    if (myTopPosition==2000){
        myTopPosition=-400
        // myDirection=1;
    // }else if (myTopPosition==-20){
    //     myDirection=-1;
    }
    myTopPosition+=-2*myDirection;
    myTitreHTML.style.left=myTopPosition+'px';
    requestAnimationFrame(myHorizontalSlide);
}

requestAnimationFrame(myHorizontalSlide);