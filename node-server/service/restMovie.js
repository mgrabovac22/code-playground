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

exports.getMovieName = function(req, res) { 
    res.type("application/json");

    let movieDAO = new MovieDAO();

    movieDAO.getMovieName().then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.getOneMovie = function(req, res) { 
    res.type("application/json");

    let movieDAO = new MovieDAO();

    movieDAO.get(req.params.ID).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.add = function(req, res) { 
    res.type("application/json");

    let movieDAO = new MovieDAO();

    movieDAO.add(req.body).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.update = function(req, res) { 
    res.type("application/json");

    let movieDAO = new MovieDAO();

    movieDAO.update(req.params.ID, req.body.movie).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.delete = function(req, res) { 
    res.type("application/json");

    let movieDAO = new MovieDAO();

    movieDAO.delete(req.params.ID).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

