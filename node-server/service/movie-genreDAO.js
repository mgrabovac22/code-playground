let DB = require("./database");

class movieGenreDAO{
    constructor(){
        this.db = new DB();
    }

    async getALL(){
        this.db.openConnection();
        let sql = "SELECT * FROM movie_genres";
        let result = await this.db.executeQuery(sql);
        this.db.closeConnection();
        return result;
    }

    async get(ID){
        this.db.openConnection();
        let sql = "SELECT * FROM movie_genres where idGenre_movies = ?";
        let result = await this.db.executeQuery(sql, ID);
        this.db.closeConnection();
        return result;
    }

    async getElement(element, ID){
        this.db.openConnection();
        let sql = `SELECT ${element} from movie_genres where idGenre_movies = ?`;
        let result = await this.db.executeQuery(sql, ID);
        this.db.closeConnection();
        return result;
    }

    async getElementWithFilterElement(element, filter, filterValue){
        this.db.openConnection();
        let sql = `SELECT ${element} from movie_genres where ${filter} = ?`;
        let result = await this.db.executeQuery(sql, filterValue);
        this.db.closeConnection();
        return result;
    }

    async add(genre){
        let sql = "INSERT INTO movie_genres VALUES(default, ?)";
        let result = await this.db.executeQuery(sql, genre.name);
        return result;
    }

    async update(ID, element, elementValue){
        let sql = `UPDATE movie_genres SET ${element} = ? WHERE idGenre_movies = ?`;
        let result = await this.db.executeQuery(sql, [elementValue, ID]);
        return result;
    }

    async delete(ID){
        let sql = "DELETE FROM movie_genres WHERE idGenre_movies = ?";
        let result = await this.db.executeQuery(sql, ID);
        return result;
    }
};