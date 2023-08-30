let MovieGenreDAO = require("./movie-genreDAO");

exports.getMovieGenres = function(req, res) { 
    res.type("application/json");

    let movieGenreDAO = new MovieGenreDAO();

    movieGenreDAO.getALL().then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.getOneMovieGenre = function(req, res) { 
    res.type("application/json");

    let movieGenreDAO = new MovieGenreDAO();

    movieGenreDAO.get(req.params.ID).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.add = function(req, res) { 
    res.type("application/json");

    let movieGenreDAO = new MovieGenreDAO();

    movieGenreDAO.add(req.body).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.update = function(req, res) { 
    res.type("application/json");

    let movieGenreDAO = new MovieGenreDAO();

    movieGenreDAO.update(req.params.ID, req.body.genre).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.delete = function(req, res) { 
    res.type("application/json");

    let movieGenreDAO = new MovieGenreDAO();

    movieGenreDAO.delete(req.params.ID).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}