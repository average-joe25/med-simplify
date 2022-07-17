const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();

app.use(express.static(path.join(__dirname+"/client", 'build')));

app.use(express.urlencoded({extended: true,}));

app.use(express.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/data',function(req,res){
  console.log(req.body.data);
  res.send({value: req.body.data});
});

app.listen(process.env.PORT||9000,function(){
    console.log("server is running");
});