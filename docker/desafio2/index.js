const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const cors = require('cors')
const mysql = require('mysql');
let connection = mysql.createConnection(config);
const createTable = `
    create table IF NOT EXISTS people(id int not null auto_increment primary key, name varchar(255))
`;
connection.query(createTable);
connection.end();

app.use(cors());


app.get('/', async (req, res) => {
    connection = mysql.createConnection(config);
    const sql = `INSERT INTO people(name) VALUES('Cristiano')`;
    connection.query(sql);

    let namesSaved = "";
    
    
    await connection.query(`SELECT * FROM people`, async function(err, result, fields){
        if(err) throw err;

        namesSaved = await result.map(e => e.name).join(", ");
        console.log(namesSaved);
        
        res.send('<h1>Full Cycle</h1><br><br><br><br>'+namesSaved);
    });
    
    connection.end();
});

app.listen(port, () => {
    console.log("Rodando na porta "+port)
});