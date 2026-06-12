const http = require('http');
const server=http.createServer((req,resp)=>{

    switch (req.url) {
        case "/":
            resp.end("Home....")
            break;
        case "/about":
            resp.end("About....")
            break;
        case "/contact":
            resp.end("Contact....")
            break;
        default:
            resp.end("404 Error... Page not found !")
            break;
    }
    

})
server.listen(4000,()=>{
    console.log("Running");
    
})