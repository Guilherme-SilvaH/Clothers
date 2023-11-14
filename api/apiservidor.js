const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5500;

app.use(bodyParser.json());


app.options('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.status(200).end();
});


app.post("/api/zQXrg3GU/users", (req, res) => {
    res.status(200).json({ message: "Solicitação POST bem-sucedida" });
});

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});

