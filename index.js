import * as http from 'http';

const server = http.createServer((req, res) => {
    res.write(`<button onclick=${"console.log('Click!')"}>Welcome to NODE app!</button>`);
    res.end();
});

server.listen(process.env.PORT);

/*
OS Linux
NodeJS (Software/CLI)
Port (3000)
*/