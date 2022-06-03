const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();


app.use(express.static(path.join(__dirname, './public')));


app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/prova', function(req, res){
res.send(req);
});


app.listen(PORT, function(){
  console.log('Server in ascolto sulla porta: ' + PORT);
});
