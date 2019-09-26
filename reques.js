 const fs=require("fs");
 exports.hoi=function(req,res,cnt){  
    fs.writeFile('counter.txt', cnt, (err) => {
        if (err) throw err;
        console.log(cnt);
    });  
  
}