

/*for (let Film of Films) {

    let fileOFfilm = Films.find(rechercheId);
    watchedPersent = Math.round((fileOFfilm.watchedTimeInMinutes / fileOFfilm.totalTimeInminutes) * 100);
    toHoursAndMinutes = (Math.floor(fileOFfilm.totalTimeInminutes / 60))+ "h " + (fileOFfilm.totalTimeInminutes % 60) + "min";

    let injectionPhoto = document.getElementById("photo");
    injectionPhoto.innerHTML = `<img src="${fileOFfilm.linkImage}" class="card-img-top" alt="...">`

    let injectiontitle = document.querySelector(".card-title");
    injectiontitle.innerHTML = `${fileOFfilm.title}`

    let injectionDiscription = document.querySelector(".card-text");
    injectionDiscription.innerHTML = `${fileOFfilm.shortDiscription}`

    let injectionitem1 = document.querySelector(".item1");
    injectionitem1.innerHTML = `Genres : ${fileOFfilm.Genre}`

    let injectionitem2 = document.querySelector(".item2");
    injectionitem2.innerHTML = `Réaliser par : ${fileOFfilm.director}`

    let injectionitem3 = document.querySelector(".item3");
    injectionitem3.innerHTML = `${watchedPersent} % a été vu`

    let injectionitem4 = document.querySelector(".item4");
    injectionitem4.innerHTML = `Durée : ${toHoursAndMinutes}`

    let injectionitem5 = document.querySelector(".item5");
    injectionitem5.innerHTML = `Durée visionnée : ${fileOFfilm.watchedTimeInMinutes} min`

}*/



  let fileOFfilm = Films.find(rechercheId);

  if (fileOFfilm.totalTimeInminutes == fileOFfilm.watchedTimeInMinutes) {
    signwatched = `<i class="green fa-solid fa-film"></i>`
  }
  else {
    signwatched = `<i class="red fa-solid fa-film"></i>`
  }

  watchedPersent = Math.round((fileOFfilm.watchedTimeInMinutes / fileOFfilm.totalTimeInminutes) * 100);
  toHoursAndMinutes = (Math.floor(fileOFfilm.totalTimeInminutes / 60)) + "h " + (fileOFfilm.totalTimeInminutes % 60) + "min";

  htmlElements2 =
    `<div class="container">
    <div class="row">

        <div class="col image col-sm-12 col-md-6 col-lg-6 card" style="width: 18rem;">
            <div id=" photo">
                <img src="${fileOFfilm.linkImage}" class="card-img-top" alt="${fileOFfilm.title}">
            </div>
        </div>
        <div class="col col-sm-12 col-md-6 col-lg-6 m-auto">
            <div class="card-body">
                <h2 class="card-title">${fileOFfilm.title}</h2>
                <p class="card-text text-center">Année: ${fileOFfilm.year}</p>
                <p class="card-text">${fileOFfilm.shortDiscription}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item item1">Genres : ${fileOFfilm.Genre}</li>
                <li class="list-group-item item2">Réaliser par : ${fileOFfilm.director}</li>
                <li class="list-group-item item4">Durée : ${toHoursAndMinutes}</li>
                <li class="list-group-item item5">Durée visionnée : ${fileOFfilm.watchedTimeInMinutes} min</li>
                <li class="list-group-item item3">${watchedPersent} % a été vu ${signwatched}</li>
            </ul>
            <div class="card-body">
                <button type="button" class="btn btn-sm btn btn-primary"><a
                        href="https://www.senscritique.com/liste/Films_vus_en_2022/3166440" target="_blank">la
                        source</a></button>
                <button type="button" class="btn btn-sm btn-success"><a href="index.html"
                        class="card-link">Accueil</a></button>

            </div>
        </div>

    </div>
</div>
<div class="youtube mt-5">
<br><h3>BANDE ANNONCE</h3>
<iframe width="640" height="385" src="https://www.youtube.com/embed/${fileOFfilm.linkyoutube}" title="YouTube video player" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><br>`
  document.getElementById("matinid").innerHTML = htmlElements2;


