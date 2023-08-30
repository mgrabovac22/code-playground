let DB = require("./database");

class showGenreDAO{
    constructor(){
        this.db = new DB();
    }

    async getALL(){
        this.db.openConnection();
        let sql = "SELECT * FROM show_genres";
        let result = await this.db.executeQuery(sql);
        this.db.closeConnection();
        return result;
    }

    async get(ID){
        this.db.openConnection();
        let sql = "SELECT * FROM show_genres where idgenre_shows = ?";
        let result = await this.db.executeQuery(sql, [ID]);
        this.db.closeConnection();
        return result;
    }

    async getElement(element, ID){
        this.db.openConnection();
        let sql = `SELECT ${element} from show_genres where idgenre_shows = ?`;
        let result = await this.db.executeQuery(sql, [ID]);
        this.db.closeConnection();
        return result;
    }

    async getElementWithFilterElement(element, filter, filterValue){
        this.db.openConnection();
        let sql = `SELECT ${element} from show_genres where ${filter} = ?`;
        let result = await this.db.executeQuery(sql, [filterValue]);
        this.db.closeConnection();
        return result;
    }

    async add(genre){
        let sql = "INSERT INTO show_genres VALUES(default, ?)";
        let result = await this.db.executeQuery(sql, [genre.name]);
        return result;
    }

    async update(ID, element, elementValue){
        let sql = `UPDATE show_genres SET ${element} = ? WHERE idgenre_shows = ?`;
        let result = await this.db.executeQuery(sql, [elementValue, ID]);
        return result;
    }

    async delete(ID){
        let sql = "DELETE FROM show_genres WHERE idgenre_shows = ?";
        let result = await this.db.executeQuery(sql, [ID]);
        return result;
    }
};

module.exports = showGenreDAO;