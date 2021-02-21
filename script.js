let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

    while (numberOfFilms === "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
    return numberOfFilms;
}

numberOfFilms = start();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        console.log("мало");
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        console.log("classic");
    } else if (numberOfFilms >= 30) {
        console.log("киноман");
    } else {
        console.log("error");
    }
}

detectPersonalLevel();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let inputFilm = prompt("Какой фильм вы посмотрели в последниий раз?");
        if (inputFilm.length === 0 || inputFilm.length > 50) {
            inputFilm = prompt("Какой фильм вы посмотрели в последниий раз?");
            i--;
            console.log("error");
        } else {
            personalMovieDB.movies[inputFilm] = +prompt("На сколько оцените?");
            console.log("done");
        }
    }
}

rememberMyFilms();

function showMyDB() {
    if (!personalMovieDB.private) {
        console.log(personalMovieDB);
    }
}


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres.push(genre);
    }
}

writeYourGenres();

showMyDB();



