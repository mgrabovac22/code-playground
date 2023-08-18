const express = require('express');
const app = express();

const restMovie = require("./restMovie.js");
  app.get("/movies", restMovie.getMovies);
  app.get("/movies/:ID", restMovie.getOneMovie);
  app.post("/movies", restMovie.add);
  app.put("/movies/:ID", restMovie.update);
  app.delete("/movies/:ID", restMovie.delete);

const restShow = require("./restShow.js");
  app.get("/shows", restShow.getShows);
  app.get("/shows/:ID", restShow.getOneShow);
  app.post("/shows", restShow.add);
  app.put("/shows/:ID", restShow.update);
  app.delete("/shows/:ID", restShow.delete);

const restBook = require("./restBook.js");
  app.get("/books", restBook.getBooks);
  app.get("/books/:ID", restBook.getOneBook);
  app.post("/books", restBook.add);
  app.put("/books/:ID", restBook.update);
  app.delete("/books/:ID", restBook.delete);

const restAuthor = require("./restAuthor.js");
  app.get("/authors", restAuthor.getAuthors);
  app.get("/authors/:ID", restAuthor.getOneAuthor);
  app.post("/authors", restAuthor.add);
  app.put("/authors/:ID", restAuthor.update);
  app.delete("/authors/:ID", restAuthor.delete);

const restMovieGenre = require("./restMovieGenre.js");
  app.get("/movie-genres", restMovieGenre.getMovieGenres);
  app.get("/movie-genres/:ID", restMovieGenre.getOneMovieGenre);
  app.post("/movie-genres", restMovieGenre.add);
  app.put("/movie-genres/:ID", restMovieGenre.update);
  app.delete("/movie-genres/:ID", restMovieGenre.delete);

const restShowGenre = require("./restShowGenre.js");
  app.get("/show-genres", restShowGenre.getShowsGenres);
  app.get("/show-genres/:ID", restShowGenre.getOneShowGenre);
  app.post("/show-genres", restShowGenre.add);
  app.put("/show-genres/:ID", restShowGenre.update);
  app.delete("/show-genres/:ID", restShowGenre.delete);

const restBookGenre = require("./restBookGenre.js");
  app.get("/book-genres", restBookGenre.getBookGenres);
  app.get("/book-genres/:ID", restBookGenre.getOneBookGenre);
  app.post("/book-genres", restBookGenre.add);
  app.put("/book-genres/:ID", restBookGenre.update);
  app.delete("/book-genres/:ID", restBookGenre.delete);

let fun = function(request, response) {
  response.send('Hello world');
};

app.get('/', fun);


const list =  [
  {
    "firstName": "Luka",
    "lastName": "Gvozdanic",
    "username": "Lux22",
    "email": "lux.2022gvozd@gmail.com",
    "age": 26,
    "registrationDate": "June, 20th 2018."
  },
  {
    "firstName": "Petar",
    "lastName": "Pocekalo",
    "username": "PepGuard",
    "email": "pepocekalo12@gmail.com",
    "age": 19,
    "registrationDate": "July, 28th 2012."
  },
  {
    "firstName": "Dora",
    "lastName": "Lupanic",
    "username": "Dominitrix",
    "email": "dominilpc@gmail.com",
    "age": 20,
    "registrationDate": "March, 30th 2016."
  },
  {
    "firstName": "Stjepan",
    "lastName": "Bogdanic",
    "username": "StipGdanic",
    "email": "bogdanPan",
    "age": 17,
    "registrationDate": "October, 23rd 2015."
  },
  {
    "firstName": "Marko",
    "lastName": "Luptic",
    "username": "MarkicLu",
    "email": "lupilu212@gmail.com",
    "age": 19,
    "registrationDate": "February, 1st 2022."
  }
];

app.get('/users', (req, res) => {
  res.json(list);
});

app.listen(3000, () => {
  console.log('Express server started at port 3000');
});

  
