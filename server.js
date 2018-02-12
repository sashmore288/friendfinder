var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT= 3000;
console.log(__dirname)
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.resolve(__dirname, '/app/public/home.html')))
app.get('*', (req,res) => {

	var index = path.resolve(__dirname, '/app/public/home.html')
	res.sendFile(index)
})
//require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
	console.log("app listening on PORT" + PORT);
});