const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(morgan('dev'));
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

app.listen(8080)