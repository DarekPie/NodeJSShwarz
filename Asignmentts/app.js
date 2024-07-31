const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body>')
        res.write('<h1>Wellcome User</h1>')
        res.write('<form action="/user" method="POST"><input type="text" name="user"><button type="submit">Submit</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    else if(url==='/user'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        })
        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            console.log(parseBody)
            ////const message=parseBody.split('=')[1];
            ////fs.writeFileSync('message.txt',message);
             res.end();
           })
    }
})
server.listen(3000);