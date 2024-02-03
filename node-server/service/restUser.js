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

    userDAO.add(req.body).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.send(err);
    })
}

exports.update = function(req, res) { 
    res.type("application/json");

    let userDAO = new UsersDAO();

    userDAO.update(req.params.name, req.body.user).then((result) => {
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

exports.login = function(req, res){
    res.type("application/json");

    let userDAO = new UsersDAO();
    console.log(req.body);
    userDAO.login(req.body.email, req.body.password).then((result) => {
        if(result!=null){
            req.session.name=result.name;
            req.session.email=result.email;
            res.send({"result": true});
        }
        else{
            res.send({"result": false});
        }
        
    }).catch((err) => {
        res.send(err);
    })
}