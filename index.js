const express = require('express');
const morgan = require('morgan');
const bParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(bParser.json())
app.use(express.static('screenshots/'));
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendfile('./facemash.html')
})

app.post('/data', function(req, res) {
    var filename = [];
    fs.readdir('./screenshots/', (err, files) => {
        files.forEach(file => {
            filename.push(path.basename(file));
           // console.log(file)
        })
        res.send(filename);
    })
    console.log(filename)
})

app.post('/rate', function(req, res) {
    console.log(req.body);
})

app.listen(8080)