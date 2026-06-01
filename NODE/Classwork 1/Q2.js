const fs = require('fs');

// Read File
fs.readFile("./message.txt",(err,data)=>{
    if (err) {
        console.log(err);
        
    } else {
        console.log(data.toString());
        
    }
})



// Append File
const data=" Update";
fs.appendFile("./message.txt",data,(err)=>{
    if (err) {
        console.log(err);
        
    } else {
        console.log("Data Appended");
        
    }
})


// Delete File
fs.unlink("./message.txt",(err)=>{
    if (err) {
        console.log(err);
        
    } else {
        console.log("File Deleted");
        
    }
})

