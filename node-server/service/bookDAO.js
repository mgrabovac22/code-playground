let DB = require("./database");

class bookDAO{
    constructor(){
        this.db = new DB();
    }

    async getALL(){
        this.db.openConnection();
        let sql = "SELECT * FROM books";
        let result = await this.db.executeQuery(sql);
        this.db.closeConnection();
        return result;
    }

    async get(ID){
        this.db.openConnection();
        let sql = "SELECT * FROM books where idBook = ?";
        let result = await this.db.executeQuery(sql, ID);
        this.db.closeConnection();
        return result;
    }

    async getElement(element, ID){
        this.db.openConnection();
        let sql = `SELECT ${element} from books where idBook = ?`;
        let result = await this.db.executeQuery(sql, ID);
        this.db.closeConnection();
        return result;
    }

    async getElementWithFilterElement(element, filter, filterValue){
        this.db.openConnection();
        let sql = `SELECT ${element} from books where ${filter} = ?`;
        let result = await this.db.executeQuery(sql, filterValue);
        this.db.closeConnection();
        return result;
    }

    async add(book){
        let sql = "INSERT INTO shows VALUES(default, ?, ?, ?, ?, ?, ?)";
        let result = await this.db.executeQuery(sql, [book.name, book.genre, book.year, book.writer, book.users, book.grade]);
        return result;
    };

    async update(ID, element, elementValue){
        let sql = `UPDATE books SET ${element} = ? WHERE idBook = ?`;
        let result = await this.db.executeQuery(sql, [elementValue, ID]);
        return result;
    }

    async delete(ID){
        let sql = "DELETE FROM books WHERE idBook = ?";
        let result = await this.db.executeQuery(sql, ID);
        return result;
    }

};

