const http = require('http');

const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) =>{

    console.log(req.url);
    if(req.url === '/p4prankings'){
        fs.readFile(path.join(__dirname, 'emilianovega_node', 'db.json'), (err, data)=>{
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(data);
        })
        
    }
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, ()=> console.log(`server is running ${PORT}`));