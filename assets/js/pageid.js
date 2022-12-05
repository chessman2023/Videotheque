    // Je récupère l'identifiant unique liée au paramètre d'URL ?id=
const myFilmId = new URLSearchParams(window.location.search).get("id");
console.log(myFilmId);
// Je crée une fonction qui va comparer l'ID de l'URL avec l'ID de mon objet correspondant
const rechercheId = (Films)=> {
    // 
    return Films._id == myFilmId;
}
//console.log(Films.find(rechercheId));
//let fileOFfilm = films.find(rechercheId);

