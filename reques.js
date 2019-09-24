 const fs=require("fs");
 exports.hoi=function(){
    fs.readFile('counter.txt', function(err, data) {
        var cnt = (data*1)+ 1;
        fs.writeFile('counter.txt', cnt, (err) => {
            if (err) throw err;
            console.log('Done!');
        });
    });
}