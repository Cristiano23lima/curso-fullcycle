const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<b>Full Cycle</b>');
});

app.listen(port, () => {
    console.log("Rodando na porta "+port)
});