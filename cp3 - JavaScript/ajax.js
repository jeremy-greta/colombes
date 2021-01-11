// Branche l'événement LOAD a WINDOW

window.addEventListener(
    'load',
    function(){
        // Step 1 : Instanciation de la requête AJAX
        let oXHR= new XMLHttpRequest;
        // Step 2 : Ouverture requête AJAX
        oXHR.open('get', 'https://restcountries.eu/rest/v2/all', true);
        // Step 3 : Envoi requête AJAX
        oXHR.send();
        // Step 4 : Traitement retour du serveur
        oXHR.addEventListener(
            'readystatechange',
            function(){
                if (oXHR.status === 200 && oXHR.readyState === 4) 
                {
                    // transforme la réponse texte en objet
                    let oData = JSON.parse(oXHR.responseText);
                    // pour chaque pays de l'objet réponse
                    let oOption;
                    for (let i = 0; i < oData.length; i++) {
                        oOption = document.createElement('option');
                        oOption.value = oData[i].alpha2Code;
                        // oOption.textContent = oData[i].name;
                        oOption.textContent = oData[i].translations.fr;
                        // Attache l'enfant OPTION à son parent SELECT
                        document.getElementById('land').appendChild(oOption)
                    }
                }
            },
            false
        );
        // Step 5 : 
    },
    false
);