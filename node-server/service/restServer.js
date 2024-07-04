const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
let session = require('express-session');
const path = require('path');

const app = express();

app.use(session({
  secret: 'pecena voda',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(bodyParser.json());

const restMovie = require("./restMovie.js");
  app.get("/movies", restMovie.getMovies);
  app.get("/movies/:ID", restMovie.getOneMovie);
  app.get("/movie/names", restMovie.getMovieName);
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

const restUser = require("./restUser.js");
  app.get("/users/:ID", restUser.getUser);
  app.post("/users", restUser.add);
  app.put("/users/:name", restUser.update);
  app.delete("/users/:name", restUser.delete);
  app.post("/users/login", restUser.login);

const port = 3000;
app.use(express.static(path.resolve("../../react/vite-react-app/dist")));

app.get('/', (request, response)=>{
  response.sendFile(__dirname + path.resolve("../../react/vite-react-app/dist/index.html"));
});

app.listen(port, () => {
  http = "http://localhost:";
  console.log('Express server started at: ' + http + port);
});

  
