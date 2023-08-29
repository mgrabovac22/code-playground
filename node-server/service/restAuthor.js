let AuthorDAO = require("./authorsDAO");

exports.getAuthors = function(req, res) { 
    res.type("application/json");

    let authorDAO = new AuthorDAO();

    authorDAO.getALL().then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.getOneAuthor = function(req, res) { 
    res.type("application/json");

    let authorDAO = new AuthorDAO();

    authorDAO.get(req.params.ID).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.add = function(req, res) { 
    res.type("application/json");

    let authorDAO = new AuthorDAO();

    authorDAO.add(req.body).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.update = function(req, res) { 
    res.type("application/json");

    let authorDAO = new AuthorDAO();

    authorDAO.update(req.params.ID, req.body.author).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.delete = function(req, res) { 
    res.type("application/json");

    let authorDAO = new AuthorDAO();

    authorDAO.delete(req.params.ID).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}