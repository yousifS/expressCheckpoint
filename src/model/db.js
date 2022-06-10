let mysql = require("mysql");

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306
    
});

connection.connect();


connection.query("select now()", function(err, results){
    if(err){
        console.log("Could not test the database connectoin", err);
    } else {
        console.log("Connection test results: ", results);
    }
}),

module.exports = connection;