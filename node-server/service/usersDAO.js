    let DB = require("./database");
    
    class userDAO{
        constructor(){
            this.db = new DB();
        }

        async get(element, name){
            this.db.openConnection();
            let result = await this.db.executeQuery(`SELECT ${element} FROM users WHERE Name = ?`, name);
            this.db.closeConnection();
            return result;
        }

        async add(user){
            let sql = "INSERT INTO users VALUES(default, ?, ?, ?, ?, ?)";
            let result = await this.db.executeQuery(sql, [user.Name, user.email, user.date_of_birth, user.age, user.password]);
            return result;
            
        }
        
        async update(name, element, elementValue){
            let sql = `UPDATE users SET ${element} = ? WHERE Name = ?`;
            let result = await this.db.executeQuery(sql, [elementValue, name]);
            return result;
        }

        async delete(name){
            let sql = "DELETE FROM users WHERE Name = ?";
            let result = await this.db.executeQuery(sql, name);
            return result;
        }
        
    };

