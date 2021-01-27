/**
 * Ecrit un cookie dans le domaine en cours
 * @param {string} name - nom du cookie
 * @param {string} value - valeur du cookie
 * @param {number} duration - durée de vie du cookie (en jours)
 */

 function writeCookie(name, value, duration) {
    // teste si duration est un nombre
    if (isNaN(duration)){
        throw 'La durée doit être un nombre de jours';
    } else {
        // Date du jour
        var dToday = new Date();
        // ajoute la durée à aujourd'hui
        dToday.setTime(dToday.getTime() + duration*24*60*60*1000);
    }
    // Ecrit le cookie
    let sCookie = name + '=' + value + ';expires=' + dToday.toLocaleString() + ';path=/';
    // Pour Firefox
    if (navigator.userAgent.indexOf('Firefox') > 0) {
        sCookie += ';SameSite=None;Secure';
    }
    document.cookie = sCookie;
}

 /**
  * Lit un cookie dans le domaine en cours
  * @param {string} name -nom du cookie
  * @return {string}
  */

function readCookie(name) {
    let aCookies = document.cookie.split(';');
    for (let i = 0; i < aCookies.length; i++) {
        if (aCookie[i].trim().indexOf(name + "=") === 0) {
            let aCookie=aCookies[i].split('=');
            return aCookie[1];
        }
    }
}

/**
 * Supprime le cookie dans le domaine en cours
 * @param {string} name - nom du cookie
 */

 function eraseCookie(name) {
     // pour supprimer un cookie, on le crée avec une valeur vide et une durée négative
     writeCookie(name, '', -1);
 }

 /** Fonction événementielle pour gérer le click sur le bouton cookie */
if (document.getElementById('saveCookie')) {
    document.getElementById('saveCookie').addEventListener(
    'click',
    function() {
        sName = document.getElementById('fname').value;
        if (sName !== "") {
            let aValues = [];
            let aElements = document.querySelectorAll('form [name]:not([name=fname])');
            for (let i = 0; i < aElements.length; i++) {
                aValues.push(aElements[i].value);
            }
            let sValues = aValues.join(',');
            writeCookie(document.getElementById('fname').value, sValues, 7);
            alert('Cookie enregisté');      
        } else {
            alert('Prénom obligatoire!');
        }
    },
    false
    );
}

/** */
if (document.getElementById('readCookie')) {
    document.getElementById('readCookie').addEventListener(
        'click',
        function () {
            let aCookies = document.cookie.split(';');
            let oRow, oCell;
            document.getElementById('tblCookies').innerHTML=('');
            for (let i = 0; i < aCookies.length; i++) {
                let aCookie = aCookies[i].split('=');
                oRow = document.createElement('tr');
                oCell = document.createElement('td');
                oCell.textContent = aCookie[0].trim();
                oRow.appendChild(oCell);
                oCell = document.createElement('td')
                oCell.textContent = aCookie[1];
                oRow.appendChild(oCell);
                document.getElementById('tblCookies').appendChild(oRow);
            }
        },
        false
    );
} 


