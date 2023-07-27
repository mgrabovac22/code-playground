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

