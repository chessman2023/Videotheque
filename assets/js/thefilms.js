class Film {

    constructor(title,year, Genre, director, totalTimeInminutes, watchedTimeInMinutes, shortDiscription, linkyoutube) {
        this.title = title;
        this.year = year;
        this.Genre = Genre;
        this.director = director;
        this.totalTimeInminutes = totalTimeInminutes;
        this.watchedTimeInMinutes = watchedTimeInMinutes;
        this.shortDiscription = shortDiscription;
        this._id = title
            .toLowerCase()
            .replace(remplacement, "_")
            .replace(":", "");
        this.linkImage = "assets/img/" + this._id + ".jpg";
        this.linkyoutube = linkyoutube;
    }
}
let myfilm1 = new Film("Twist à Bamako", 2022, "Drame, Historique", "Robert Guédiguian", 129, 25, "1962. Le Mali goûte son indépendance fraîchement acquise et la jeunesse de Bamako danse des nuits entières sur le twist venu de France et d'Amérique. Samba, le fils d'un riche commerçant, vit corps et âme l'idéal révolutionnaire : il parcourt le pays pour expliquer aux paysans les vertus du socialisme. C'est là, en pays bambara, que surgit Lara, une jeune fille mariée de force, dont la beauté et la détermination bouleversent Samba. Samba et Lara savent leur amour menacé. Mais ils espèrent que, pour eux comme pour le Mali, le ciel s'éclaircira...","4JbwjjZp-AI");
let myfilm2 = new Film("Licorice Pizza", 2021, "Comédie dramatique, Romance", "Paul Thomas Anderson", 133, 50, "1973, dans la région de Los Angeles. Alana Kane et Gary Valentine font connaissance le jour de la photo de classe au lycée du garçon. Alana n'est plus lycéenne, mais tente de trouver sa voie tout en travaillant comme assistante du photographe. Gary, lui, a déjà une expérience d'acteur, ce qu'il s'empresse de dire à la jeune fille pour l'impressionner. Amusée et intriguée par son assurance hors normes, elle accepte de l'accompagner à New York pour une émission de télévision. Mais rien ne se passe comme prévu…","2hSx0nE54Rs");
let myfilm3 = new Film("Jane par Charlotte", 2022, "Portrait, Art", "Paul Thomas Anderson", 90, 90, "Charlotte Gainsbourg a commencé à filmer sa mère, Jane Birkin, pour la regarder comme elle ne l'avait jamais fait. La pudeur de l'une face à l'autre n'avait jamais permis un tel rapprochement. Mais par l'entremise de la caméra, la glace se brise pour faire émerger un échange inédit, sur plusieurs années, qui efface peu à peu les deux artistes et les met à nu dans une conversation intime inédite et universelle pour laisser apparaître une mère face à une fille.","ezqfUTCqi20");
let myfilm4 = new Film("Mes frères et moi", 2022, "Drame", "Yohan Manca", 108, 108, "Nour a 14 ans. Il vit dans un quartier populaire au bord de la mer. Il s'apprête à passer un été rythmé par les mésaventures de ses grands frères, la maladie de sa mère et des travaux d'intérêt général. Alors qu’il doit repeindre un couloir de son collège, il rencontre Sarah, une chanteuse lyrique qui anime un cours d’été. Une rencontre qui va lui ouvrir de nouveaux horizons...","MGphW0mYDK8");
let myfilm5 = new Film("Conférence", 2020, "Drame", "Ivan I. Tverdovskyv", 130, 67, "17 ans après la prise d’otages du théâtre Dubrovka, l'une des tragédies majeures du 21ème siècle dans l'histoire de la Russie, Natalia, revient à Moscou pour organiser une soirée commémorative pour les familles des victimes de l'attentat d'octobre 2002. Pourquoi s’est-elle retirée dans un monastère depuis si longtemps ? Pourquoi sa fille la rejette-t-elle ? Quel est le but de sa démarche ?","Rt_7GPfqFBg");
let myfilm6 = new Film("Ouistreham", 2022, "Drame", "Emmanuel Carrère", 106, 106, "Marianne Winckler, écrivaine reconnue, entreprend un livre sur le travail précaire. Elle s’installe près de Caen et, sans révéler son identité, rejoint une équipe de femmes de ménage. Confrontée à la fragilité économique et à l’invisibilité sociale, elle découvre aussi l’entraide et la solidarité qui unissent ces travailleuses de l’ombre.","nsDyQ0tACNo");

let Films = []
Films = [myfilm1, myfilm2, myfilm3, myfilm4, myfilm5, myfilm6]
let watchedPersent = "";
let htmlElements0 = "";
for (let Film of Films) {
    if (Film.totalTimeInminutes == Film.watchedTimeInMinutes) {
        signwatched = `<i class="green fa-solid fa-film"></i>`
    }
    else {
        signwatched = `<i class="red fa-solid fa-film"></i>`
    }
    toHoursAndMinutes = (Math.floor(Film.totalTimeInminutes / 60)) + "h " + (Film.totalTimeInminutes % 60) + "min";
    watchedPersent = Math.round((Film.watchedTimeInMinutes / Film.totalTimeInminutes) * 100);

    htmlElements0 +=
        `<div class="col col-sm-12 col-md-6 col-lg-4">
        <div class="card shadow-sm">
        <img class="image" src="${Film.linkImage}" alt="${Film.title}">
            <div class="card-body">
                <p class="card-text"><h2>${Film.title}</h2><br>
                <p class="card-text text-center">Année: ${Film.year}<br>
                <h3>(${Film.Genre})</h3></p>
                <p class="director">Réaliser par:</p><h4>${Film.director}</h4><br>
                <h5 class="text-muted text-center">Durée: ${toHoursAndMinutes} <br>Durée visionnée: ${Film.watchedTimeInMinutes} min</h5>
                <h5> ${watchedPersent}% a été vu ${signwatched}</h5><br>
                <div class="discription border-0"><p>${Film.shortDiscription}</div></p>
                <div class="btn1 d-flex justify-content-between align-items-center">
                    <div class="btn-group mx-5">
                        <button type="button" class="btn btn-sm btn-primary"><a href="https://www.senscritique.com/liste/Films_vus_en_2022/3166440" target="_blank">la source</a></button>
                        <button type="button" class="btn btn-sm btn-success"><a href="filmpages.html?id=${Film._id}">Voir la fiche du film</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    document.getElementById("myid").innerHTML =htmlElements0;

}

let totalTimewatchable = 0;
let totalTimewatched = 0;

for (let Film of Films) {

    totalTimewatched += Film.watchedTimeInMinutes;
    totalTimewatchable += Film.totalTimeInminutes;
}

let injectionHTML = document.getElementById("time");
injectionHTML.innerHTML = `le temps total potentiellement visionnable de la vidéothèque est: ${totalTimewatchable} minutes équivalent: 
${(Math.floor(totalTimewatchable / 60)) + "h " + (totalTimewatchable % 60)}
<br> le temps total visionné de la vidéothèque est:<br> ${totalTimewatched} minutes équivalent:  ${(Math.floor(totalTimewatched / 60)) + "h " + (totalTimewatched % 60)} minutes`
