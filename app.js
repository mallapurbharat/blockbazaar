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


app.listen(process.env.PORT, process.env.IP, function(){

	console.log("Server started...");
});