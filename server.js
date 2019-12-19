const express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    handlebars = require("handlebars"),
    expressHandlebars = require('express-handlebars'),
    MongoClient = require("mongodb").MongoClient,
    assert = require('assert');

const app = express();
const port = process.env.PORT || 5050;

// DB SETTINGS
const url = 'mongodb://oliverhuxley:Quince0698.@ds243049.mlab.com:43049/asterdots';
let db;
const dbName = 'asterdots';

const dbCon = MongoClient.connect(url, db, (err, client) => {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    db = client.db(dbName);
  });

// MIDDLEWARE CONFIG.
app.use(bodyParser.urlencoded({ 
    extended: true 
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/assets'));

app.set('port', port);
app.set("view engine", "handlebars");
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));

//HOME ROUTE
app.get('/' ,(req, res) => {
    res.status(200);
    res.render('./home');
});

//FORM ENTRY -- AUTH ERRORS
app.post('/registro', async (req, res) => {
    delete req.body._id;
    let collection = await db.collection('users').insertOne(req.body);
    res.render("./home");
});

//ERROR 500
app.get('/error', (req, res) => {
    res.status(500);
    res.render('./500');
})

//ERROR 404 
app.use((req, res) => {
    res.status(404).render("./404");
});

app.listen(port, () => {
    console.log(`Running on port: ${port}`);
});