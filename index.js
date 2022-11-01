const express = require("express");
const app = express();

app.use(express.static(__dirname + '/client'))
app.use(express.json());
const port = process.env.PORT || 3000

var favoritePlaces = {
	"places": [
		{"name":"Istanbul", "lattitude": 41.0082, "longitude":28.9784},
		{"name":"Chicago", "lattitude": 41.8781, "longitude":-87.6298},
		{"name":"Albainia", "lattitude": 41.1533, "longitude":20.1683},
		{"name":"Italy", "lattitude": 41.8719, "longitude":12.5674},
		{"name":"Dubai", "lattitude": 25.2048, "longitude":55.2708},
		{"name":"Puerto Rico", "lattitude": 18.2208, "longitude":-66.5901},
		{"name":"Antartica", "lattitude": -82.8628, "longitude":135.0000},
		{"name":"Brazil", "lattitude": -14.2350, "longitude":-51.9253},
		{"name":"Silwad", "lattitude": 31.9794, "longitude":35.2619},
		{"name":"Cancun", "lattitude": 21.1619, "longitude":-86.8515}
	]
}

var hintSetOne = '{"hint_one":"Hair capital of the world", "hint_two":"Ketchup on hotdogs arent allowed", "hint_3":"The capital of this country is named Tirana", "hint_four":"The capital of this country is named Tirana", "hint_five","Pizza capital of the world"}'


app.get('/send', function(req, res) {
	console.log(favoritePlaces)
	res.json(favoritePlaces)
})

app.get('/hintsOne', function(req, res) {
	console.log(hintOne)
	res.json(hintOne)
})

app.listen(port, function() {
	console.log("Server is running at http://localhost:3000/")
})

