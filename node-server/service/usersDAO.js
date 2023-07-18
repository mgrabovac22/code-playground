    let DB = require("./database");
    
    class userDAO{
        constructor(){
            this.db = new DB();
        }

        async get(userId){
            this.db.openConnection();
                let result = await this.db.executeQuery("SELECT * FROM users WHERE idUsers = ?", userId);

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


    };

    let inst = new userDAO();

    inst.get("1").then((result) => {
    console.log(result);
    }).catch((error) => {
    console.error('Error:', error);
    });

    inst.add("Marin", "grabovac@gmail.com", "2003-12-06", 20, "34000").then((result) => {
    console.log(result);
    }).catch((error) => {
    console.error('Error:', error);
    });



