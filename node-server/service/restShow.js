let ShowDAO = require("./showDAO");

exports.getShows = function(req, res) { 
    res.type("application/json");

    let showDAO = new ShowDAO();

    showDAO.getALL().then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.getOneShow = function(req, res) { 
    res.type("application/json");

    let showDAO = new ShowDAO();

    showDAO.get(req.params.ID).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.add = function(req, res) { 
    res.type("application/json");

    let showDAO = new ShowDAO();

    showDAO.add(req.body).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.update = function(req, res) { 
    res.type("application/json");

    let showDAO = new ShowDAO();

    showDAO.update(req.params.ID, req.body.show).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.delete = function(req, res) { 
    res.type("application/json");

    let showDAO = new ShowDAO();

    showDAO.delete(req.params.ID).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}