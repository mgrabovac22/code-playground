let DB = require("./database");

class movieDAO{
    constructor(){
        this.db = new DB();
    }

    async getALL(){
        this.db.openConnection();
        let sql = "SELECT * FROM movie";
        let result = await this.db.executeQuery(sql);
        this.db.closeConnection();
        return result;
    }

    async get(ID){
        this.db.openConnection();
        let sql = "SELECT * FROM movie where idMovie = ?";
        let result = await this.db.executeQuery(sql, ID);
        this.db.openConnection();
        return result;
    }

    async getElement(element, ID){
        let sql = `SELECT ${element} from movie where idMovie = ?`;
        let result = await this.db.executeQuery(sql, ID);
        return result;
    }

    async add(movie){
        let sql = "INSERT INTO movie VALUES(default, ?, ?, ?, ?, ?)";
        let result = await this.db.executeQuery(sql, [movie.name, movie.year, movie.grade, movie.genre, movie.user]);
        return result;
    };

    async update(ID, element, elementValue){
        let sql = `UPDATE movie SET ${element} = ? WHERE idMovie = ?`;
        let result = await this.db.executeQuery(sql, [elementValue, ID]);
        return result;
    }

    async delete(ID){
        let sql = "DELETE FROM movie WHERE idMovie = ?";
        let result = await this.db.executeQuery(sql, ID);
        return result;
    }
};

module.exports = movieDAO;
    


