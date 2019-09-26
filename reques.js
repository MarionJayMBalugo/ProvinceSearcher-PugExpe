 const fs=require("fs");
 exports.hoi=function(req,res){
    fs.readFile('counter.txt', function(err, data) {
        if(err) throw err;
        var cnt = (data*1)+1;
    fs.writeFile('counter.txt', cnt, (err) => {
        if (err) throw err;
        console.log(cnt);
    });  
    });   
}