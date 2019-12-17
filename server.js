const express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    handlebars = require("handlebars"),
    expressHandlebars = require('express-handlebars');

const app = express();
const port = process.env.PORT || 5050;

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
app.post('/registro', (req, res) => {
    console.log(req.body);
    res.render('./home');
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