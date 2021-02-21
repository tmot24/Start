const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

if (numberOfFilms < 10) {
    console.log("мало");
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    console.log("classic");
} else if (numberOfFilms >= 30) {
    console.log("киноман");
} else {
    console.log("error");
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

for (let i = 0; i < 2; i++) {
    let inputFilm = prompt("Какой фильм вы посмотрели в последниий раз?");
    if (inputFilm.length === 0 || inputFilm.length > 50 ){
        inputFilm = prompt("Какой фильм вы посмотрели в последниий раз?");
        i--;
    } else {
        personalMovieDB.movies[inputFilm] = +prompt("На сколько оцените?");
    }
}
console.log(personalMovieDB);