var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");


//routes

app.get("/", function(req,res){
	res.render("home");
});


app.listen(3000, "localhost", function(){

	console.log("Server started at http://localhost:3000");
});