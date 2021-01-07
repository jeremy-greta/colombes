// Branche l'événement LOAD à WINDOW en (DOM-2)
window.addEventListener(
    'load',
    function(){
        fillTable();
        avgAge();
    },
    false
);

// Fonction qui remplit le tableau HTML avec un array

function fillTable() {
    let oRow, oCell;
    for (let i = 0; i < members.length; i++) {        // pour chaque membre de l'array MEMBERS
        oRow = document.createElement('tr');          // creation du TR
        // création de la 1ère TD
        oCell = document.createElement('td');         
        oCell.textContent = members[i].fname;
        oRow.appendChild(oCell);
        // création de la 2ème TD
        oCell = document.createElement('td');
        oCell.textContent = members[i].age;
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
}


function avgAge() {
    let avgcalc
    document.getElementById('avgAge').textContent = 'test'
}