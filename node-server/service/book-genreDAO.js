let DB = require("./database");

class bookGenreDAO{
    constructor(){
        this.db = new DB();
    }

    async getALL(){
        this.db.openConnection();
        let sql = "SELECT * FROM book_genres";
        let result = await this.db.executeQuery(sql);
        this.db.closeConnection();
        return result;
    }

    async get(ID){
        this.db.openConnection();
        let sql = "SELECT * FROM book_genres where idBook_genre = ?";
        let result = await this.db.executeQuery(sql, ID);
        this.db.closeConnection();
        return result;
    }

    async getElement(element, ID){
        this.db.openConnection();
        let sql = `SELECT ${element} from book_genres where idBook_genre = ?`;
        let result = await this.db.executeQuery(sql, ID);
        this.db.closeConnection();
        return result;
    }

    async getElementWithFilterElement(element, filter, filterValue){
        this.db.openConnection();
        let sql = `SELECT ${element} from book_genres where ${filter} = ?`;
        let result = await this.db.executeQuery(sql, filterValue);
        this.db.closeConnection();
        return result;
    }

    async add(genre){
        let sql = "INSERT INTO book_genres VALUES(default, ?)";
        let result = await this.db.executeQuery(sql, genre.name);
        return result;
    }

    async update(ID, element, elementValue){
        let sql = `UPDATE book_genres SET ${element} = ? WHERE idBook_genre = ?`;
        let result = await this.db.executeQuery(sql, [elementValue, ID]);
        return result;
    }

    async delete(ID){
        let sql = "DELETE FROM book_genres WHERE idBook_genre = ?";
        let result = await this.db.executeQuery(sql, ID);
        return result;
    }
};