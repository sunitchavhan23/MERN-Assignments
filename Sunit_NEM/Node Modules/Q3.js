const http = require('http');
const fs = require('fs');

const server=http.createServer((req,resp)=>{
    let path="./View/"
    switch (req.url) {
        case "/":
            path += "home.html"
            break;
    
        default:
            path += "error.html"
            break;
    }

    fs.readFile(path,(err,data)=>{
        if (err) {
            resp.end(err)
            
        } else {
            resp.end(data)
            
        }
    })
})

server.listen(4000,()=>{
    console.log("Running");
    
})
