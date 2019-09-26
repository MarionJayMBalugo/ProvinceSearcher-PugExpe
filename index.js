const express = require('express');
const app = express();
const fs = require('fs');
const adding = require('./add');
const path = require('path');
const requestjs=require("./reques");
const provinceFile=require("./provinceFile");
var count=0;
app.listen('8080', function(){
    fs.readFile('counter.txt', function(err, data) {
        if(err) throw err;
        count = (data*1);
        console.log("listening");
    });
});
app.set('view engine', 'pug');
app.use(function(req, res, next) {
    count=count+1;
    requestjs.hoi(req,res,count);
    next();
});
app.use(express.static(path.join( __dirname ,'/public')));
app.get('/province/:provinceName', (req, res) => {
    provinceFile.getme(req,res);
});
app.get('*', (req, res) => {
    res.sendStatus(404);
});
app.post('/rate', function(req, res) { 
     adding.addFile(req, res);
});
