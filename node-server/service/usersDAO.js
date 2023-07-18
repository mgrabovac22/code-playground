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

        async add(name, email, date_of_birth, age, password){
            let sql = "INSERT INTO users VALUES(default, ?, ?, ?, ?, ?)";
            this.db.openConnection();
            let result = await this.db.executeQuery(sql, [name, email, date_of_birth, age, password]);
            this.db.closeConnection();
            return result;
            
        }
        
        async update(name, element, elementValue){
            let sql = `UPDATE users SET ${element} = ? WHERE Name = ?`;
            this.db.openConnection();
            let result = await this.db.executeQuery(sql, [elementValue, name]);
            this.db.closeConnection();
            return result;
        }

        async delete(name){
            let sql = "DELETE FROM users WHERE Name = ?";
            this.db.openConnection();
            let result = await this.db.executeQuery(sql, name);
            this.db.closeConnection();
            return result;
        }
        
    };

    // #TESTING#
    let inst = new userDAO();

    inst.get("email", "Marin").then((result) => {
    console.log(result);
    }).catch((error) => {
    console.error('Error:', error);
    });
    
    inst.add("Marin", "grabovac@gmail.com", "2003-12-06", 20, "34000").then((result) => {
    console.log(result);
    }).catch((error) => {
    console.error('Error:', error);
    });
    
    inst.update("Marin", "email", "grabovacmarin@gmail.com").then((result) => {
    console.log(result);
    }).catch((error) => {
    console.error('Error:', error);
    });
    
    inst.delete("Petar").then((result) => {
    console.log(result);
    }).catch((error) => {
    console.error('Error:', error);
    });


