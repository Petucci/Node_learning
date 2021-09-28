const http = require('http')

const server = http.createServer((request, response) => {
    //console.log(request);
    console.log(request.url, request.method, request.headers);

    let url = request.url.replace('/','');

    response.setHeader('Content-type', 'text/html');
    response.statusCode = 200;

    response.write('<h1>Hello world')
    response.write(` ${url}`);
    response.write('</h1>')
    response.end();
});

server.listen(3000);