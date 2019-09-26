const express = require('express');
const app = express();
const fs = require('fs');
const adding = require('./add');
const path = require('path');
const requestjs=require("./reques");

app.use(function(req, res, next) {
    console.log(req.path)

    requestjs.hoi(req,res);
    next();
});


app.use(express.static(path.join( __dirname ,'./public/')));
app.listen('8080', console.log('listening to port 8080'));
app.set('view engine', 'pug');


app.get('/province/:provinceName', (req, res) => {
    fs.readFile('./province/' + req.params.provinceName + '.json', (e, data) => {
        if (e) {
            res.sendStatus(404);
        }

        var dats = JSON.parse(data);
        res.render('index', {dats});
    });

});
app.get('*', (req, res) => {
    res.sendStatus(404);
});

app.post('/rate', function(req, res) {
   
     adding.addFile(req, res);
})
