const mysql2 = require('mysql2');
    
    class DB{
        constructor(){
            this.connection = mysql2.createConnection({
                host: 'localhost',
                user: 'root',
                password: "root",
                database: 'node_db_2023'
              }); 
        }
        openConnection(){
            this.connection.connect();
        }
        executeQuery(sql, data){
            return new Promise((resolve, reject) => {
                this.connection.query(sql, [data], (err, result) =>{
                        if(err){
                            reject(err);
                        }
                        else{
                            resolve(result);
                        }
                })
            })
            
        }
        closeConnection(){
            this.connection.end();
        }
        
    };

    module.exports = DB;