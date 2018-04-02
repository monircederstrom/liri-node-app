require("dotenv").config();
let request = require('request-promise');
let fs = require('fs');
let movieName = process.argv.slice(2).join("+");
let keys = require("./keys.js");

//var spotify = spotify(keys.spotify);
//var client =  twitter(keys.twitter);

if (movieName === ""){
    request("http://www.omdbapi.com/?t=" +"Mr+Nobody" + "&y=&plot=short&apikey=trilogy")
.then(response => {
   let data = JSON.parse(response);
   console.log("Movie Title: " + data.Title);
   console.log("Year Released: " + data.Year);
   console.log("IMBD Rating: " + data.imdbRating);
   console.log(data.Ratings[1]);
   console.log("Country produced in: " + data.Country);
   console.log("Movie Language: " + data.Language);
   console.log("Plot: " + data.Plot);
   console.log("Actors: " + data.Actors);
})
}
else {

// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy")
.then(response => {
   let data = JSON.parse(response);
   console.log("Movie Title: " + data.Title);
   console.log("Year Released: " + data.Year);
   console.log("IMBD Rating: " + data.imdbRating);
   console.log(data.Ratings[1]);
   console.log("Country produced in: " + data.Country);
   console.log("Movie Language: " + data.Language);
   console.log("Plot: " + data.Plot);
   console.log("Actors: " + data.Actors);
})
}