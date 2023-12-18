const express = require('express');
const app = express();
const port = process.env.PORT || 3005;


app.use(express.static('stuff'));


app.get(/book/, (req, res) =>{
    res.send('\ngot you\n');
});

app.route('/banana')
    .get((req,res)=>{
        res.send('get request\n')
    })
    .put((req,res)=>{
        res.send('get put\n')
    })
    .delete((req,res)=>{
        res.send('get delete\n')
    })

app.get(/.*apple$/, (req, res) =>{
    res.send('\n you got a fruit \n')
})

app.listen(port, ()=> {
    console.log(`on port: ${port}`);
});

