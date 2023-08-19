let UsersDAO = require("./usersDAO");

exports.getUser = function(req, res) { 
    res.type("application/json");

    let userDAO = new UsersDAO();

    userDAO.getUser(req.params.ID).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.add = function(req, res) { 
    res.type("application/json");

    let userDAO = new UsersDAO();

    userDAO.add(req.params.user).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.update = function(req, res) { 
    res.type("application/json");

    let userDAO = new UsersDAO();

    userDAO.update(req.body.name, req.body.element, req.body.elementValue).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.delete = function(req, res) { 
    res.type("application/json");

    let userDAO = new UsersDAO();

    userDAO.delete(req.params.name).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}