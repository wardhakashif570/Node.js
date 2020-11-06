const http=require('http');
const fs = require("fs");
const server=http.createServer((req,res)=>{
   const data= fs.readFileSync(`${__dirname}/userapi/api.json`,"utf-8");
       // console.log(data);
        const objData=JSON.parse(data);
       
  
    if(req.url=="/"){
        res.end('hello from the other side its a home page');
    }
    else if(req.url=="/about"){
        res.end('Welcome to about page');
    }
    else if(req.url=="/contact"){
        res.write('Welcome to Contact Us page');
        
        res.end();
    }

    else if(req.url=="/userapi"){
        res.writeHead(200,{"Content-type":"application/json"});
        res.end(objData[5].name);
      
        
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 error page does not exist'</h1>");
    }

});

server.listen(8000,"127.0.0.1",()=>{
    console.log('listening to the port no 8000');
}); //localhost ip address