
htmlElements2 = "";
let totalTimewatchable = 0;
let totalTimewatched = 0;
const urlFetch = "https://sore-cowboy-boots-wasp.cyclic.app/api/movies/";
const movieFetch = fetch(urlFetch);

    movieFetch
      .then(function(res){
        if(res.ok)
    {return res.json();
    }
})
.then(function(data) {
    data.forEach(movie => {
        totalTimewatched += movie.watchedTimeInMinutes;
        totalTimewatchable += movie.totalTimeInminutes;
        if (movie.totalTimeInminutes == movie.watchedTimeInMinutes) {
            signwatched = `<i class="green fa-solid fa-film"></i>`
        }
        else {
            signwatched = `<i class="red fa-solid fa-film"></i>`
        }
        toHoursAndMinutes = (Math.floor(movie.totalTimeInminutes / 60)) + "h " + (movie.totalTimeInminutes % 60) + "min";
        watchedPersent = Math.round((movie.watchedTimeInMinutes / movie.totalTimeInminutes) * 100);
       
    htmlElements2 +=
        `<div class="col col-sm-12 col-md-6 col-lg-4">
        <div class="card shadow-sm">
        <img class="image" src="${movie.imageUrl}" alt="${movie.title}">
            <div class="card-body">
                <p class="card-text"><h2>${movie.title}</h2><br>
                <p class="card-text text-center">Année: ${movie.year}<br>
                <h3>(${movie.Genre})</h3><br>
                <p class="director">Réaliser par:</p><h4>${movie.director}</h4><br>
                <h5 class="text-muted text-center">Durée: ${toHoursAndMinutes} <br>Durée visionnée: ${movie.watchedTimeInMinutes} min</h5>
                <h5> ${watchedPersent}% a été vu ${signwatched}</h5><br>
                <div class="discription border-0"><p><b>Synopsis :</b>${movie.shortDiscription}</div></p>
                <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group mx-5">
                        <button type="button" class="btn btn-sm btn-primary"><a href="https://www.senscritique.com/liste/Films_vus_en_2022/3166440" target="_blank">la source</a></button>
                        <button type="button" class="btn btn-sm btn-success"><a href="Api-filmpages.html?id=${movie.id}">Voir la fiche du film</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    document.getElementById("myid").innerHTML = htmlElements2;
    let injectionHTML = document.getElementById("time2");

    injectionHTML.innerHTML = `le temps total potentiellement visionnable de la vidéothèque est:<br> ${totalTimewatchable} minutes équivalent: 
    ${(Math.floor(totalTimewatchable / 60)) + "h " + (totalTimewatchable % 60)}
    <br> le temps total visionné de la vidéothèque est:<br> ${totalTimewatched} minutes équivalent:  ${(Math.floor(totalTimewatched / 60)) + "h " + (totalTimewatched % 60)} minutes`
    console.log(totalTimewatched)
    });
})
.catch(function(err){
    console.log(err);
});


