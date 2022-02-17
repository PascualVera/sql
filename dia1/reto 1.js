let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "sql994",
        database: "codenotch"
    });

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Succesfully connected');
    }
});
let sql = "ALTER TABLE alumnos  ADD col VARCHAR(12);";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Added col");
        console.log(result);
    }
});

 sql = "ALTER TABLE alumnos DROP col;";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Deleted col");
        console.log(result);
    }
});

 sql = "DROP TABLE asignatura";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Deleted table");
        console.log(result);
    }
})



connection.end();