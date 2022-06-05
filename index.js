const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();


app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({ extended: true, }));
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/fullfillment', function (req, res) {

  const hotelToSearch = req.body.queryResult.parameters.Hotel;

  res.json({
    fullfillmentText: "La keyword in input è " + hotelToSearch,
    source: "fullfillment"
  });


});


app.listen(PORT, function () {
  console.log('Server in ascolto sulla porta: ' + PORT);
});
