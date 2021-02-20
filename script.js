const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 1; i <= 2; i++) {
  const inputFilm = prompt("Один из последних просмотренных фильмов");
  personalMovieDB.movies[inputFilm] = +prompt("На сколько оцените?");
}
console.log(personalMovieDB);