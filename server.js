const http = require('http');
const _ = require('lodash');

const host = '127.0.0.1';
const port = 4000;


const server = http.createServer((req,res) => {

    // lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });

    greet();

    res.statusCode =200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello, welcome to node');
    res.end();
});

server.listen(port,host, () => {
    console.log(`Listening on port: ${port}`);
});