exports.getme=(req,res)=>{
    fs.readFile('./province/' + req.params.provinceName + '.json', (e, data) => {
        if (e) {
            res.sendStatus(404);
        }
        var dats = JSON.parse(data);
        res.render('index', {dats});
    });
}