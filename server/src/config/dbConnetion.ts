import mysql2 from 'mysql2'

let conn =  mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Job_Application",
})

conn.connect((err) => {
    if (err) throw err;
    console.log("Connected with MySql")
})

export = conn