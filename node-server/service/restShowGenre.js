let ShowGenreDAO = require("./show-genreDAO");

exports.getShowsGenres = function(req, res) { 
    res.type("application/json");

    let showGenreDAO = new ShowGenreDAO();

    showGenreDAO.getALL().then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.getOneShowGenre = function(req, res) { 
    res.type("application/json");

    let showGenreDAO = new ShowGenreDAO();

    showGenreDAO.get(req.params.ID).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.add = function(req, res) { 
    res.type("application/json");

    let showGenreDAO = new ShowGenreDAO();

    showGenreDAO.add(req.params.genre).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.update = function(req, res) { 
    res.type("application/json");

    let showGenreDAO = new ShowGenreDAO();

    showGenreDAO.update(req.body.ID, req.body.element, req.body.elementValue).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.delete = function(req, res) { 
    res.type("application/json");

    let showGenreDAO = new ShowGenreDAO();

    showGenreDAO.delete(req.params.ID).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}