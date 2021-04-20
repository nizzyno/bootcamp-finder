// Require http core module
const http = require("http");

const todos = [
    { id: 1, text: 'Todo One' },
    { id: 2, text: 'Todo Two' },
    { id: 3, text: 'Todo Three' }
]

// Create server http method, takes function that takes request and response object
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'applicaiton/json',
        'X-Powered-By': 'Node.js'
    });

    // console.log(req.headers.authorization);

    let body = [];

    req
    .on('data', chunk => {
        body.push(chunk);
    })
    .on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);
    })

    res.end(
        JSON.stringify({
        success: true,
        data: todos
    }));
});

// Port
const PORT = 5000;

// Run server listen on port and second function with console.log
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));