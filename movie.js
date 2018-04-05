var title = process.argv[3];
var request = require('request-promise');
function movie() {
    //console.log("movie working");
    if (process.argv[3] === ""){
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
    request("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy")
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
    };
}
module.exports = movie();