/*
    I use this script for skirt the synchronicities problems with js scripts loading. 
    - using the syntaxe: function().then(result => function(), result).catch(alert)
    - in the HTML, bind only this script, and here call the function with a .then() for each new script. 
    - all scripts will be loaded before launching their execution, and skirt the synchronicities problem in the case of onterdependants scripts
*/
/*
    J'utilise ce script pour contourner les problemes de synchronicités dans le cas de scripts interdépendants.
        - on utilise la syntaxe function().then(resultat=> function(), result).catch() 
        - dans le html on appel seulement ce script, et ici on appellera la fonction dans un .then() pour chaque nouveau nouveau.
        - tout les scripts seront chargés avant de commencer leur execution, et contourne le probleme d'interpendance 
*/

/*
    For load the scripts, 
        - started by call the function loadScript with the first script src
        - for each next script to load, write '.then(var_promise_return => loadScript(src), var_promise_return)' 
        - at end, write '.catch(alert)'
*/
/*
    Pour charger les scripts,
        - on appelle la fonction avec en param le chemin vers le premier script
        - pour chaque script suivant, on ecrira '.then(var => loadScript(scr), var)):
            - var represente le resutat de la Promise
        - pour le dernier script on écrira '.catch(alert)'
*/  
loadScript("script_path_1")
.then(result1 => loadScript("script_path_2", result1))
.then(resultFinal => loadScript("script_path_3", resultFinal))
//and add a line for each script
.catch(alert);

/*
    this function take a script src in param.
        - create a element 'script', assign him the src passed in param as an attribute src, and append him on the document head
        - return a Promise, who call resolve() if the script has been loaded, or reject() if he hasn't been
*/
/*
    Cette fonction prend en parametre une string représentant le chemin vers le script
        - on creer un nouvel element <script> avec comme attribut scr la chaine passée en parametre, et on l'ajoute au head du document
        - la fonction renvoi une Promise, qui appel resolve() si le script à été chargé, sinon reject()
*/
function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = scr;
        document.head.append(script);

        script.onload = () => resolve("script " + src + " chargé");
        script.onerror = () => reject(new Error("Echec du chargement du script " + src))
    })
};

