const express = require('express');
const path = require('path');
require('dotenv').config();
const request = require('request');

const app = express();

app.use(express.static(path.join(__dirname+"/client", 'build')));

app.use(express.urlencoded({extended: true,}));

app.use(express.json());



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/data',function(req,res){
    const inputdata=req.body.data;
    var clientServerOptions = {
          uri: 'http://127.0.0.1:8000/',
          body: JSON.stringify({'data':inputdata}),
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      }
      request(clientServerOptions, function (error, response) {
          if(error){
            console.log(error);
          }
          res.send({'value':JSON.parse(response.body).value});
      }); 
});

app.listen(process.env.PORT||9000,function(){
    console.log("server is running");
});