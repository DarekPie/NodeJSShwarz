const  fs = require('fs');

const requestHandler = (req, res) =>{

    const url = req.url;
    const method = req.method;

        
    if(url ==='/'){
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        // res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url==='/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            // console.log(parseBody);
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message, err => {
                res.statusCode =302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My first page</title></head>')
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>')
    res.end();

    // process.exit();
};

//#1
// module.exports = requestHandler;
//#2
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };
//#3
// module.exports.handler = requestHandler;
// module.exports.someText = 'Some another hardcoded text';

//#4
exports.someText = 'Some another hardcoded text';