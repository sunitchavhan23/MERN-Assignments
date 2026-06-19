const fs = require('fs');

// Read File
fs.readFile("./student.txt",(err,data)=>{
    if (err) {
        console.log(err);
        
    } else {
        console.log(data.toString());
        
    }
})

// Write Data
const data=" Update123";
fs.writeFile("./student.txt",data,(err)=>{
    if (err) {
        console.log(err);
        
    } else {
        console.log("Data Written");
        
    }
})

// Append File
const data=" Update";
fs.appendFile("./student.txt",data,(err)=>{
    if (err) {
        console.log(err);
        
    } else {
        console.log("Data Appended");
        
    }
})


// Delete File
fs.unlink("./student.txt",(err)=>{
    if (err) {
        console.log(err);
        
    } else {
        console.log("File Deleted");
        
    }
})

