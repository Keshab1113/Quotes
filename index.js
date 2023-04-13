const http = require("http");
const fs= require("fs");
const server = http.createServer((req,res)=>{
    res.end(fs.readFileSync("index.html","utf-8"));
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("Server is running on port 8000");
})