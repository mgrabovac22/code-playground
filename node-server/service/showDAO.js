let DB = require("./database");

class showDAO{
    constructor(){
        this.db = new DB();
    }

    async getALL(){
        this.db.openConnection();
        let sql = "SELECT * FROM shows";
        let result = await this.db.executeQuery(sql);
        this.db.closeConnection();
        return result;
    }

    async get(ID){
        this.db.openConnection();
        let sql = "SELECT * FROM shows where idshows = ?";
        let result = await this.db.executeQuery(sql, ID);
        this.db.closeConnection();
        return result;
    }

    async getElement(element, ID){
        this.db.openConnection();
        let sql = `SELECT ${element} from shows where idshows = ?`;
        let result = await this.db.executeQuery(sql, ID);
        this.db.closeConnection();
        return result;
    }

    async add(show){
        let sql = "INSERT INTO shows VALUES(default, ?, ?, ?, ?, ?)";
        let result = await this.db.executeQuery(sql, [show.name, show.genre, show.rating, show.episodes, show.users]);
        return result;
    }

    async update(ID, element, elementValue){
        let sql = `UPDATE shows SET ${element} = ? WHERE idshows = ?`;
        let result = await this.db.executeQuery(sql, [elementValue, ID]);
        return result;
    }

    async delete(ID){
        let sql = "DELETE FROM shows WHERE idshows = ?";
        let result = await this.db.executeQuery(sql, ID);
        return result;
    }
}


    