var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('htmls'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`));