import * as http from 'http';

const port = 3000;

const server = http.createServer((req, res) => {
    res.write(`<button onclick=${"console.log('Click!')"}>Welcome to NODE app!</button>`);
    res.end();
});

server.listen(port);

/*
OS Linux
NodeJS (Software/CLI)
Port (3000)
*/