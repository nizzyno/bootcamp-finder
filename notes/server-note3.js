// Require http core module
const http = require("http");

const todos = [
    { id: 1, text: 'Todo One' },
    { id: 2, text: 'Todo Two' },
    { id: 3, text: 'Todo Three' }
]

// Create server http method, takes function that takes request and response object
const server = http.createServer((req, res) => {
    const {method, url} = req;
    let body = [];

    req
    .on('data', chunk => {
        body.push(chunk);
    })
    .on('end', () => {
        body = Buffer.concat(body).toString();

        let status = 404;
        const response = {
            success: false,
            data: null
        }

        if(method === 'GET' && url === '/todos') {
            status = 200;
            response.success = true;
            response.data = todos;
        } else if(method === 'POST' && url === '/todos') {
            const { id, text} = JSON.parse(body);

            if(!id || !text) {
                status = 400;
                response.error = 'Please add id and text';
            } else {
                todos.push({ id, text });
                status = 201;
                response.success = true;
                response.data = todos;
            }
        }

        res.writeHead(status, {
            'Content-Type': 'applicaiton/json',
            'X-Powered-By': 'Node.js'
        });

        res.end(
            JSON.stringify(response));
    })
});

// Port
const PORT = 5000;

// Run server listen on port and second function with console.log
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));