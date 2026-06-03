const fs = require('fs');

const data="Name: Sunit, Age:25, Course: NodeJs";

fs.writeFile("./Student.txt",data,(err)=>{
    if (err) {
        console.log(err);
        
    } else {
        console.log("Data Written");
        
    }
})

fs.readFile("./Student.txt",(err,data)=>{
    if (err) {
        console.log(err);
        
    } else {
        console.log(data.toString());
        
    }
})