// DOM - Document Object Model
//Définir l'interface
/* ASTUCE : Le virgule ci-dessous signifie que les élément après sont du même type (Constante ici)*/

const form = document.querySelector("#course-form") // je ne comprends pas pourquoi on fait une constante sur le form? une action?

,     listeTache = document.querySelector(".collection") // ok pour ajout dans la liste tache

,     supprimerListe = document.querySelector(".supprimer-course")// ok pour supression dans la liste tache

,     contenuTache = document.querySelector("#contenuTache") // je ne comprends pas pourquoi on fait une constante sur le form? une action?

,     Filtrer = document.querySelector("#filter");

//Application

maListeTache() //Il faut l'ecrire en amont pour qu'elle puisse s'executer. uhm??

function maListeTache () {
//Ajouter un évènement

    form.addEventListener("submit", ajouterUneTache);

//Supprimer une tache

    listeTache.addEventListener("click", supprimerUneTache);

//Nettoyer la liste de tâche
    supprimerListe.addEventListener("click", nettoyerLaListe);

//Filtrer les tâches

    Filtrer.addEventListener("keyup", filtrerLesTaches)//keyup veut dire que quand l'utilisateur lache la touche du clavier il se passe quelque chose

}

//Ajouter une tache

function ajouterUneTache (e){
    if(contenuTache.value === ""){
        alert ("Merci d'Ajouter une tâche")
    }
    
    // Ajouter une balise

    const li = document.createElement("li"); // Cette constante va  nous permttre de creer un élement dans le tableau

    //Ajouter une class dans le <li>
    //La ligne ci-dessous va de paire avec la ligne ci-dessus dans le sens ou quand une ligne sera ajoutée dans le tableau il faudra ajouter la class Collection item.

    li.className = "collection-item";

    // Relier le contenu du formulaire dans la balise li

    li.appendChild(document.createTextNode(contenuTache.value)); // explication 13.30 video. Le contenu tache dans les parenthese rappel la constante créée ci dessus

    // Créer le lien <a></a>

    const link = document.createElement ("a");


    // Ajouter une class au lien <a></a>
    link.className = "delete-item secondary-content"

    // Ajouter l'icone
    link.innerHTML = "<ion-icon name=\"close-circle\"></ion-icon>";

    //Relier <a></a> dans le li
    li.appendChild(link);

    // Relier li à la balise ul
    listeTache.appendChild(li);

    // Faire revenir la case ajouter une tache en texte vide
    contenuTache.value = ""


    e.preventDefault()
}

//Création de la fonction supprimer une tache
function supprimerUneTache (e){
    if (e.target.parentElement.classList.contains("delete-item")) {
        if (confirm("Voulez-vous vraiment supprimer ?"))
        e.target.parentElement.parentElement.remove();
        

    }
}

// Nettoyer la liste de tâche

function nettoyerLaListe() {

    listeTache.innerHTML = "";

}


//Filtrage dans la liste de course

function filtrerLesTaches (e) {

    const contenuClavier = e.target.value.toLowerCase() //Target.value va afficher ce que nous allons taper dans la barre de filtres.

    document.querySelectorAll(".collection-item").forEach(
        function(tache) {
            const motCle = tache.firstChild.textContent;
            if (motCle.toLowerCase().indexOf(contenuClavier) != -1) {
                tache.getElementsByClassName.display = "block"
            } else {
                tache.style.display = "none"
            }
        }
    );
    

        


    console.log(contenuClavier);

}