const mysql = require("mysql");

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    port:"3306",
    password:"",
    database:"crud_app",
    multipleStatements: true
});

conn.connect((err)=>{
    if(!err)
    {
        console.log("Connetion Success!");
    }
    else
    {
        console.log("Conn Failed :(");
    }
});

module.exports = conn;