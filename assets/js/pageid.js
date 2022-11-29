// Je récupère l'identifiant unique liée au paramètre d'URL ?id=
const myFimId = new URLSearchParams(window.location.search).get("id");
console.log(myFimId);


// Je crée une fonction qui va comparer l'ID de l'URL avec l'ID de mon objet correspondant
const rechercheId = (Film)=> {
    // 
    return Film._id == myFimId;
}

console.log(Films.find(rechercheId));
//let fileOFfilm = films.find(rechercheId);
