const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + 'public'))

app.get('/', function(req, res) {
    res.sendfile('./facemash.html')
})

app.post('data', function(req, res) {
    var filename = [];
    fs.readdir('screenshots/', (err, files) => {
        files.forEach(file => {
            filename.push(file);
        })
    })
    res.send(filename);
})

app.listen(8080)