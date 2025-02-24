const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let data = {
        name: "Shashank Singh",
        age: 21
    };

    if (req.url === '/data' && req.method === 'GET') {
        res.end(JSON.stringify({ message: "Data Received", data }));
    } 
    else if (req.url === "/setdata" && req.method === 'POST') {
        res.end(JSON.stringify({ message: "Data Received" }));
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Not Found" }));
    }
});

server.listen(9000, () => {
    console.log("Server is running on port 9000");
});

