
const myFilmId = new URLSearchParams(window.location.search).get("id");
console.log(myFilmId);

Apipagefetch = "";
const urlFetch2 = `https://sore-cowboy-boots-wasp.cyclic.app/api/movies/${myFilmId}`;
const movieFetch2 = fetch(urlFetch2);

    movieFetch2
      .then(function(res){
        if(res.ok)
    {return res.json();
    }
})
.then((movie) => {
    Apipagefetch =
    `<div class="container">
    <div class="row">

        <div class="col image col-sm-12 col-md-6 col-lg-6 card" style="width: 18rem;">
            <div id=" photo">
                <img src="${movie.imageUrl}" class="card-img-top" alt="${movie.title}">
            </div>
        </div>
        <div class="col col-sm-12 col-md-6 col-lg-6 m-auto">
            <div class="card-body">
                <h2 class="card-title">${movie.title}</h2>
                <p class="card-text"><b>Synopsis :</b> ${movie.shortDiscription}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item item1">Année : ${movie.year}</li>
            <li class="list-group-item item1">Genres : ${movie.Genre}</li>
            <li class="list-group-item item2">Réaliser par : ${movie.director}</li>
            <li class="list-group-item item3">${watchedPersent} % a été vu ${signwatched}</li>
            <li class="list-group-item item4">Durée : ${toHoursAndMinutes}</li>
            <li class="list-group-item item5">Durée visionnée : ${movie.watchedTimeInMinutes} min</li>
            </ul>
            <div class="card-body">
                <button type="button" class="btn btn-sm btn btn-primary"><a
                        href="https://www.senscritique.com/liste/Films_vus_en_2022/3166440" target="_blank">la
                        source</a></button>
                <button type="button" class="btn btn-sm btn-success"><a href="Api-index.html"
                        class="card-link">Accueil</a></button>

            </div>
        </div>

    </div>
</div>
<div class="youtube">
<br><h3>BANDE ANNONCE</h3>
<iframe width="640" height="385" src="https://www.youtube.com/embed/${movie.linkyoutube}" title="YouTube video player" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><br>`
  document.getElementById("matinid").innerHTML = Apipagefetch;
        
    console.log(movie.title);
  })
.catch(function(err){
    console.log(err);
});
