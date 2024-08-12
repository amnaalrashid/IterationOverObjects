// /******************************
// 	Q1) Create an object called person with properties name, age, and city.
//  Set appropriate values for these properties.
// ********************************/
// let person = {
//   name: "Amnah",
//   age: 29,
//   city: "Kuwait",
// };

// console.log(person);

// /******************************
// 	Q2) Add a new key email to the person object and assign it an email address.
// ********************************/
// person.email = "amna.alrashid@gmail.com";

// console.log(person);
// /******************************
// 	Q3) Write a JavaScript function called hasKey that takes two arguments:
//  an object and a key. The function should return true if the object contains
//  the specified key, and false otherwise. For example, if the object is
//  { name: 'John', age: 25 }, and the key is 'name', the function should return true,
//  but if the key is 'city', it should return false.
// ********************************/

// function hasKey(object, key) {
//   console.log(key);
// }

// let key = "hessa";

// console.log(person[key]);

// // hasKey(person, "aziz");

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
/******************************
      Q4) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to print the titles of all the movies.
  ********************************/
function printMovieTitle(movies) {
  movies.forEach((movie) => {
    console.log(`${movie.title}`);
  });
}

printMovieTitle(movies);

/******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
function movieReleasedIn1994(movies) {
  let movieReleaseYear = movies.filter((movie) => {
    if (movie.year == 1994) {
      return true;
    } else {
      return false;
    }
  });

  let numberOfMoviesIn1994 = movieReleaseYear.length;
  return numberOfMoviesIn1994;
}

console.log(`${movieReleasedIn1994(movies)}`);

/******************************
      Q6) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/
function movieGenre(movies) {
  let movieNewGenre = movies.map((movie) => {
    if (movie.title == "The Dark Knight") {
      movie.genre = "Action/Drama";
      return true;
    } else {
      return false;
    }
  });
  return movies;
}
let newArray = movieGenre(movies);
console.log(newArray);

/******************************
      Q7) (Challenge)
      Write a function groupMoviesByGenre that accepts an array of movie objects. 
      The function should return an object where the keys are movie genres 
      and the values are arrays of movie titles that belong to those genres. 
  ********************************/
