const express = require('express');
const app = express();
const port = 3002;
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const db = require('./query.js');

app.use(cors({ credentials: true, origin: ["http://localhost:3002"] }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello server!");
})

app.post('/signin', (req, res) => {
    db.signin(req.body, res);
})

app.post('/signup', (req, res) => {
    db.signup(req.body, res);
})

app.get('/getData', (req, res) => {
    db.getData(req,res,(result) => {
        res.send(result.data)
    });
})

server.listen(port, () => {
    console.log(`running server at http://localhost:${port}`);
})

