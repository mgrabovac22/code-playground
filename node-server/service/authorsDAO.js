let DB = require("./database");

class authorsDAO{
    constructor(){
        this.db = new DB();
    }

    async getALL(){
        this.db.openConnection();
        let sql = "SELECT * FROM author";
        let result = await this.db.executeQuery(sql);
        this.db.closeConnection();
        return result;
    }

    async get(ID){
        this.db.openConnection();
        let sql = "SELECT * FROM author where idauthor = ?";
        let result = await this.db.executeQuery(sql, ID);
        this.db.closeConnection();
        return result;
    }

    async getElement(element, ID){
        this.db.openConnection();
        let sql = `SELECT ${element} from author where idauthor = ?`;
        let result = await this.db.executeQuery(sql, ID);
        this.db.closeConnection();
        return result;
    }

    async add(author){
        let sql = "INSERT INTO author VALUES(default, ?)";
        let result = await this.db.executeQuery(sql, author.name);
        return result;
    }

    async update(ID, element, elementValue){
        let sql = `UPDATE author SET ${element} = ? WHERE idauthor = ?`;
        let result = await this.db.executeQuery(sql, [elementValue, ID]);
        return result;
    }

    async delete(ID){
        let sql = "DELETE FROM author WHERE idauthor = ?";
        let result = await this.db.executeQuery(sql, ID);
        return result;
    }
};
