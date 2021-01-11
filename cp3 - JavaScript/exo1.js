// Branche l'événement LOAD à WINDOW en (DOM-2)
window.addEventListener(
    'load',
    function(){
        fillTable();
    },
    false
);

// Fonction qui remplit le tableau HTML avec un array

function fillTable() {
    // pour chaque membre de l'array MEMBERS
    
    let oRow, oCell;
    let iSum = 0;
    for (let i = 0; i < members.length; i++) {
        // creation du TR
        oRow = document.createElement('tr');
        // création de la 1ère TD
        oCell = document.createElement('td');         
        oCell.textContent = members[i].fname;
        oRow.appendChild(oCell);
        // création de la 2ème TD
        iSum += members[i].age
        oCell = document.createElement('td');
        oCell.textContent = members[i].age;
        oCell.contentEditable = true;
        oRow.appendChild(oCell);
        // création de la 3ème TD
        oCell = document.createElement('td');
        if (members[i].married) {
            // avec IF
            if (members[i].sex == "F") {
                oCell.textContent = "Mariée"
            } else {
                oCell.textContent = "Marié"
            }

            // ou avec TERNAIRE
            oCell.textContent = members[i].sex == "F" ? "Mariée" : "Marié";

        } else {
            oCell.textContent = "Célibataire";
        };    
        oRow.appendChild(oCell);
        // Rattache la TR au TBODY
        document.getElementById('tblBody').appendChild(oRow)
    }
    // affiche la moyenne des ages
    document.getElementById('avgAge').textContent = Math.round (iSum/ members.length);
}


// ajoutez un bouton pour recalculer les moyennes.