const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
        while (personalMovieDB.count === "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("мало");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("classic");
        } else if (personalMovieDB.count >= 30) {
            console.log("киноман");
        } else {
            console.log("error");
        }
    },
    rememberMyFilms: function () {
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
    },
    showMyDB: function () {
        if (!personalMovieDB.private) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre === "" || genre === null) {
                i--;
            } else {
                personalMovieDB.genres.push(genre);
            }
        }
        personalMovieDB.genres.forEach((value, index) => {
           console.log(`Любимый жанр №${index + 1} - это ${value}`);
        });
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.private = !personalMovieDB.private;
    }

};

// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();




