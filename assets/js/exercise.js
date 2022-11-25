class film {

    constructor(title, Genre, director, totalTimeInminutes, watchedTimeInMinutes, shortDiscription, linkImage) {
        this.title = title;
        this.Genre = Genre;
        this.director = director;
        this.totalTimeInminutes = totalTimeInminutes;
        this.watchedTimeInMinutes = watchedTimeInMinutes;
        this.shortDiscription = shortDiscription;
        this.linkImage = linkImage;
    }
}
let myfilm1 = new film("Twist à Bamako 2022", "Drame, Historique", "Robert Guédiguian", 249, 25, "1962. Le Mali goûte son indépendance fraîchement acquise et la jeunesse de Bamako danse des nuits entières sur le twist venu de France et d'Amérique. Samba, le fils d'un riche commerçant, vit corps et âme l'idéal révolutionnaire: il parcourt le pays pour...", "assets/img/twist_a_bamako.webp");
console.log(myfilm1);

let myfilm2 = new film("Licorice Pizza 2021","Comédie dramatique, Romance", "Paul Thomas Anderson", 253, 50, "1973, dans la région de Los Angeles. Alana Kane et Gary Valentine font connaissance le jour de la photo de classe au lycée du garçon. Alana n'est plus lycéenne, mais tente de trouver sa voie tout en travaillant comme assistante du photographe...", "assets/img/licorice_pizza.webp");
console.log(myfilm2);

let myfilm3 = new film("Jane par Charlotte 2022 ","Portrait, Art", "Paul Thomas Anderson", 150, 20, "Charlotte Gainsbourg a commencé à filmer sa mère, Jane Birkin, pour la regarder comme elle ne l'avait jamais fait. La pudeur de l'une face à l'autre n'avait jamais permis un tel rapprochement. Mais par l'entremise de la caméra, la glace se brise pour ...", "assets/img/jane_par_charlotte.jpg");
console.log(myfilm3);

let myfilm4 = new film("Mes frères et moi 2022 ","Drame", "Yohan Manca", 168, 55, "Nour a 14 ans. Il vit dans un quartier populaire au bord de la mer. Il s'apprête à passer un été rythmé par les mésaventures de ses grands frères, la maladie de sa mère et des travaux d'intérêt général. Alors qu’il doit repeindre un couloir de son collège, il rencontre ...", "assets/img/mes_freres_et_moi.webp");
console.log(myfilm4);

let myfilm5 = new film("Conférence 2020 ","Drame", "Ivan I. Tverdovskyv", 250, 67, "17 ans après la prise d’otages du théâtre Dubrovka, l'une des tragédies majeures du 21ème siècle dans l'histoire de la Russie, Natalia, revient à Moscou pour organiser une soirée commémorative pour les familles des victimes de l'attentat d'octobre 2002...", "assets/img/conference.jpg");
console.log(myfilm5);

let myfilm6 = new film("Ouistreham 2022 ","Drame", "Emmanuel Carrère", 166, 88, "Marianne Winckler, écrivaine reconnue, entreprend un livre sur le travail précaire. Elle s’installe près de Caen et, sans révéler son identité, rejoint une équipe de femmes de ménage.Confrontée à la fragilité économique et à l’invisibilité sociale, elle ...", "assets/img/ouistreham.jpg");
console.log(myfilm6);


console.log(myfilm1, myfilm2, myfilm3, myfilm4, myfilm5, myfilm6);

let films = []
films = [
    myfilm1, myfilm2, myfilm3, myfilm4, myfilm5, myfilm6
]
console.log(films);

let htmlElements = "";

 for (let film of films) {
    htmlElements +=
        `<div class="col">
        <div class="card shadow-sm">
        <img src="${film.linkImage}" alt="">
            <div class="card-body">
                <p class="card-text"><h2>${film.title}</h2><br>
                <h3>(${film.Genre})</h3><br>
                Réaliser par:<h4>${film.director}</h4><br>
                ${film.shortDiscription}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a href="https://www.senscritique.com/liste/Films_vus_en_2022/3166440">View</a></button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">Durée: ${film.totalTimeInminutes} min<br>Durée visionnée: ${film.watchedTimeInMinutes} min</small>
                </div>
            </div>
        </div>
    </div>`
    document.getElementById("myid").innerHTML = htmlElements;
}

/*
<div id="myid"><h2>le film avec le titre : ${film.title} </h2> Réaliser par : ${film.director} avec une durée totale
     ${film.totalTimeInminutes} minutes et j'ai le ragardé ${film.watchedTimeInMinutes} minutes </div>
     */