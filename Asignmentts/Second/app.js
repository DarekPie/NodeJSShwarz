const express = require("express");

const app = express();

// app.use((req,res,next)=>{
//     console.log("first midleiware");
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("second midleiware");
//     res.send('<p>Assignmetn start</p>');
// });

app.use('/user', (req,res,next)=>{
    console.log("/user midleiware");
    res.send('<p>The middleware that handle just /user</p>');
});

app.use('/', (req,res,next)=>{
    console.log("first midleiware");
    res.send('<p>The middleware that handle just</p>');
    //
});



app.listen(3000);