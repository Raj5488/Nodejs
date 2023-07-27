const http = require("http");
const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.write(
            "<h1>Hello I'm Jitu and i am learning full stack web development course with PW skills</h1>"
        );
    }
    res.end();
})

server.listen(5000);
console.log(`Server is running...}`);