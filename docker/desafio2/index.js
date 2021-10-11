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
const connection = mysql.createConnection(config);
const createTable = `
    create table IF NOT EXISTS people(id int not null auto_increment primary key, name varchar(255))
`;
connection.query(createTable);
connection.end();

app.use(cors());


app.get('/', (req, res) => {
    const sql = `INSERT INTO people(name) VALUES('Cristiano')`;
    connection.query(sql);
    
    
    const peoplesSaved = connection.query("SELECT * FROM people");
    console.log(peoplesSaved);
    
    connection.end();
    res.send('<b>Full Cycle</b>');
});

app.listen(port, () => {
    console.log("Rodando na porta "+port)
});