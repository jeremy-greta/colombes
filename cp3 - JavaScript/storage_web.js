/** 
 * Stockage local avec l'interface localStorage 
 */
if (document.getElementById('saveLocal')) {
    document.getElementById('saveLocal').addEventListener(
        'click',
        function () {
            // Purge toutes les données
            localStorage.clear();

            // Stocke chaque donnée contenue dans input/select ayant un attribut name en local
            let aElements = document.querySelectorAll('form [name]');
            for (let i = 0; i < aElements.length; i++) {
                localStorage.setItem(aElements[i].name, aElements[i].value)
            }
        },
        false
    );
}

if (document.getElementById('readLocal')) {
    document.getElementById('readLocal').addEventListener(
        'click',
        function () {
            let oRow, oCell;
            document.getElementById('tblLocal').innerHTML = ('');
            for (let i = 0; i < localStorage.length; i++) {
                oRow = document.createElement('tr');
                oCell = document.createElement('td');
                oCell.textContent = localStorage.key(i);
                let aElement = localStorage.key(i)
                oRow.appendChild(oCell);
                oCell = document.createElement('td')
                oCell.textContent = localStorage.getItem(localStorage.key(i));
                oRow.appendChild(oCell);
                document.getElementById('tblLocal').appendChild(oRow);
            }
        },
        false
    );
} 