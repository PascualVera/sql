let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "sql994",
        database: "escenario"
    });
    connection.connect(function(error){
      if(error){
          console.log(error);
      }else{
          console.log('Succesfully connected');
      }
  });

  let sql


   sql = "SELECT avg(mark) FROM marks WHERE subject_id = 1 "
  connection.query(sql, function(err, result)
  {
      if (err)
          console.log(err);
      else
      {
          console.log("AVG Mark");
          console.log(result);
      }
  })
 sql = "SELECT COUNT(*) FROM students;";

  connection.query(sql, function(err, result)
  {
      if (err)
          console.log(err);
      else
      {
          console.log("Students number");
          console.log(result);
      }
  })
 sql = "DELETE FROM marks WHERE mark > 5 AND date > '2020-12-31' AND date < '2022-01-01'"
 connection.query(sql, function(err, result)
 {
     if (err)
         console.log(err);
     else
     {
         console.log("Marks Deleted");
         console.log(result);
     }
 })
 sql = "SELECT * FROM students WHERE año_ingreso BETWEEN '2022-01-01' AND '2022-12-31'"
  connection.query(sql, function(err, result)
  {
      if (err)
          console.log(err);
      else
      {
          console.log("Students this year");
          console.log(result);
      }
  })
sql = "SELECT subject_id, COUNT(teacher_id) AS num_teachers FROM subjects_teacher GROUP BY subject_id"

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("teacher table by subject");
        console.log(result);
    }
})


 connection.end()
