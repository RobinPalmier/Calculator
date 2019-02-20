window.onload = function(){
    // On sélectionne l'input d'affichage des résultats.
    var input = document.getElementById('operation');
    // Tableau Array regroupant toutes les touches du clavier de la calculatrice.
    var touchesCalculatrice = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "/", "*", "+", "-", "."];

    // On initialise l'événement keypress :
    onkeypress = function touche(event){
        //keyCode retourne un nombre représentant un code numérique du système
        var touche = event.keyCode; 
        // On convertit les touches en UTF-16 pour simplier l'affichage des touches pressées.
        var toucheName = String.fromCharCode(touche);

        touchesCalculatrice.forEach(function(item, index, array){
            // Si toucheName est dans le tableau Array, alors on affiche la valeur de la touche pressée dans l'input.
            if(toucheName === item){
                var operation = input.value += toucheName;
            }
        });
        // On initialise le bouton = :
        if(touche === 13){
            // On convertit le résultat en string.
            var conversion = String(operation.value);
            // J'utilise la fonction eval() pour interpréter l'opération.
            var resultat = eval(conversion);
            // J'affiche le résultat de l'opération dans l'input.
            var affichResult = input.value = resultat;
        }
        // On initialise le bouton effacé :
        if(touche === 99){
            input.value = '';
        }
    }
    
    // Je séléctionne les boutons de la calculatrice
    var button = document.querySelectorAll('.button-calc');
 // J'utilise l'instruction for in pour récupérer chaque bouton.
    for (var x in button){
        // On initialise la function onclick.
        button[x].onclick = function() {
            // Je récupère l'attribut "data-number" qui se trouve sur le bouton cliqué.
            var clickNumber = this.getAttribute('data-number');

            touchesCalculatrice.forEach(function(item, index, aray){
                // Si l'attribut cliqué se trouve dans le tableau Array, alors on affiche la valeur de la touche pressée dans l'input.
                if(clickNumber === item){
                    var operation = input.value += clickNumber;
                }
                // On initialise le bouton = :
                else if(clickNumber === 'r'){
                     // On convertit le résultat en string.
                    var conversionNumber = String(input.value);
                    // J'utilise la fonction eval() pour interpréter l'opération.
                    var resultatAff = eval(conversionNumber);
                    // J'affiche le résultat de l'opération dans l'input.
                    var afficherResultat = input.value = resultatAff;
                }
                // On initialise le bouton effacé :
                else if(clickNumber === 'c'){
                    input.value = '';
                }
            });

        }
    }
}