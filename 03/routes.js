const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('/<html>');
        return res.end();
    }
    
    if(url === '/message' && method === 'POST')
    {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
    
        req.on('end', () => {
            console.log('Finished loading data');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            fs.writeFile('message.txt', parsedBody.split('=')[1], (err) => {
                
            });
        })
    }
}


module.exports = {
    handler: requestHandler,
    someValue: "This is the second thing we export"
};

/* or
module.exports.handler = requestHandler;
module.exports.someValue = "Some value"
*/

/*
OR
exports.handler = requestHandler;
exports.someValue = "some value";
*/