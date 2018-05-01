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



app.listen(8080, function(){

	console.log("Listening on port 8080");
});