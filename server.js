const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 3000;
// -----------------resource usage
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./public"));
// ------------------database connection
mongoose.connect("mongodb://steve:felisa@ds145790.mlab.com:45790/mongolabfree");
var db = mongoose.connection;
db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});
db.once("open", function() {
  console.log("Mongoose connection successful.");
});
// -------------------routes
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, function(){
	console.log('Server connected on :  ' + PORT)
})
