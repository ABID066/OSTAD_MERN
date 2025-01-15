var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/postBody', function(req, res) {
    let JSONData = req.body;
    let JSONString = JSON.stringify(JSONData);
    let name = req.body.name;
    res.send(JSONString+"\n "+name);
})

app.get('/', function (req, res) {
    res.send("Hello World!");
})


app.get('/Home', function (req, res) {
    res.send("Hello World! from Home");
})


let jsonArray = [
                            {
                                name: 'John',
                                age: 32,
                                condition: true
                            },
                            {
                                name: 'John',
                                age: 32,
                                condition: true
                            }
                            ]
app.get('/Json', function (req, res) {
    res.json(jsonArray);
})


app.post('/About', function (req, res) {
    res.append("name","ABID")
    res.status(201).end("Hello World! from About");
})


app.get('/cookies', function (req, res) {
    res.cookie("name","ABID")
    res.cookie("city","Khulna")
    res.status(200).end("Hello World! from Cookies");
})


app.get('/ClearCookies', function (req, res) {
    res.clearCookie("name","ABID")
    res.status(200).end("Hello World! from ClearCookies");
})


app.get('/404', function (req, res) {
    res.status(404).end("Hello World! from 404");
})


app.get('/download', function (req, res) {
    res.download("./download/info.txt")
})


app.get('/india', function (req, res) {
    res.redirect("http://localhost:8000/Json")
})


app.get('/url', function (req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.end(firstName+ " " + lastName);
    //URL should be : /url?firstName=Md&lastName=Abid
})
app.get('/header', function (req, res) {
    let firstName = req.header('firstName');
    let lastName = req.header('lastName');
    let userAgent = req.header('User-Agent');

    res.end(firstName+ " " + lastName+" " + userAgent);

})



app.listen(8001, function () {
    console.log('Server started on port 8001');
})