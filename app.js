var express = require("express");
var path= require("path");

var app = express();
var port = 3000;
 
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*app.get("/", (req, res) => {
res.send("Welcome to node-demo project For mongo introduction");
});*/
app.post("/addname", (req, res) => {
  var myData = new User(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

app.get("/", (req, res) => {	
	
	// res.sendFile(path.join(__dirname + '/index.html'));
	res.sendFile(__dirname + "/index.html");
	
	var mongoose = require("mongoose");

	const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
	const BlogPost = new Schema({
	 author: ObjectId,
	 title: String,
	 body: String,
	 date: Date
	});
	
	var nameSchema = new Schema({
	  firstName: String,
	  lastNameName: String
	});
	var User = mongoose.model("User", nameSchema);

	
	mongoose.Promise = global.Promise;
	mongoose.connect("mongodb://localhost:27017/node-demo");
	res.send(mongoose);


});
 
app.listen(port, () => {
  console.log("Server listening on port " + port);
});