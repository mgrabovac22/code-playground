let MovieDAO = require("./movieDAO");

exports.getMovies = function(req, res) { 
    res.type("application/json");

    let movieDAO = new MovieDAO();

    movieDAO.getALL().then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.getOneMovie = function(req, res) { 
    res.type("application/json");

    let movieDAO = new MovieDAO();

    movieDAO.get(1).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.getElementMovie = function(req, res) { 
    res.type("application/json");

    let movieDAO = new MovieDAO();

    movieDAO.getElement("movie_name", 1).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.add = function(req, res) { 
    res.type("application/json");

    let movieDAO = new MovieDAO();

    movieDAO.add(movie).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.update = function(req, res) { 
    res.type("application/json");

    let movieDAO = new MovieDAO();

    movieDAO.update(1, "movie_name", "Real Steel").then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.delete = function(req, res) { 
    res.type("application/json");

    let movieDAO = new MovieDAO();

    movieDAO.delete(4).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

