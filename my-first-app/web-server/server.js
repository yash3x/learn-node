const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.send("Hello Express!");
});

app.listen(3000, ()=>{
    console.log("server listening on port 3000");
})

app.post('/hello',(req, res)=>{
    let body = req.body;
    body.message = "Hello " + body.name;
    res.json(body);
});


