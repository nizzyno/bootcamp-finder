// Require http core module
const http = require("http");

const todos = [
    { id: 1, text: 'Todo One' },
    { id: 2, text: 'Todo Two' },
    { id: 3, text: 'Todo Three' }
]

// Create server http method, takes function that takes request and response object
const server = http.createServer((req, res) => {
    // Create status code
    // res.writeHead(404, {
    //     'Content-Type': 'application/json',
    //     'X-Powered-By': 'Node.js'
    // })
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Powered-By', 'Node.js');
    res.write('<h1>Bootcamp Finder</h1>');
    res.write('<h2>Search Here!</h2>');

   
    res.end(JSON.stringify({
        success: false,
        error: 'Not found!',
        data: null
    }));
});

// Port
const PORT = 5000;

// Run server listen on port and second function with console.log
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));