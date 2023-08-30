let BookGenreDAO = require("./book-genreDAO");

exports.getBookGenres = function(req, res) { 
    res.type("application/json");

    let bookGenreDAO = new BookGenreDAO();

    bookGenreDAO.getALL().then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.getOneBookGenre = function(req, res) { 
    res.type("application/json");

    let bookGenreDAO = new BookGenreDAO();

    bookGenreDAO.get(req.params.ID).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.add = function(req, res) { 
    res.type("application/json");

    let bookGenreDAO = new BookGenreDAO();

    bookGenreDAO.add(req.body).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.update = function(req, res) { 
    res.type("application/json");

    let bookGenreDAO = new BookGenreDAO();

    bookGenreDAO.update(req.params.ID, req.body.genre).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.delete = function(req, res) { 
    res.type("application/json");

    let bookGenreDAO = new BookGenreDAO();

    bookGenreDAO.delete(req.params.ID).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}