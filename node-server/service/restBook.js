let BookDAO = require("./bookDAO");

exports.getBooks = function(req, res) { 
    res.type("application/json");

    let bookDAO = new BookDAO();

    bookDAO.getALL().then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.getOneBook = function(req, res) { 
    res.type("application/json");

    let bookDAO = new BookDAO();

    bookDAO.get(req.params.ID).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.add = function(req, res) { 
    res.type("application/json");

    let bookDAO = new BookDAO();

    bookDAO.add(req.body).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.update = function(req, res) { 
    res.type("application/json");

    let bookDAO = new BookDAO();

    bookDAO.update(req.params.ID, req.body.book).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.delete = function(req, res) { 
    res.type("application/json");

    let bookDAO = new BookDAO();

    bookDAO.delete(req.params.ID).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}