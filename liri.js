require("dotenv").config();
var request = require('request-promise');

var fs = require('fs');
var input = process.argv[2];
var title = process.argv[3];

var keys = require("./keys.js");
//let spotify = require('node-spotify-api');

//var spotify = spotify(keys.spotify);
var twitter = require('twitter');
var client =  twitter(keys.twitter);


switch(input){

    case "my-tweets":
    var params = {screen_name: 'momocederstrom', count: 20};
    client.get('statuses/user_timeline', params, function(error, tweets, response){
        if (!error) {
       //create loop to go through and pull just the tweets
            for (var i = 0; i < 19; i++){
                //var abc = (tweets);
                var tweet = tweets[i].text;
                var time = tweets[i].created_at;
                console.log("Tweeted at: " + time);
                console.log("Tweet:" + tweet);
                console.log("");
            }
            fs.appendFile("log.txt", "my-tweets, ", function(err){
                if (err) {
                    console.log(err);
                }
            });
            
        };
        });
        
    break;

    //case "spotify-this-song":
    //result = "insert song here";
    //spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
       // if (err) {
        //  return console.log('Error occurred: ' + err);
    //break;

    case "movie-this":
    var title = process.argv.slice(3).join("+");
    console.log(title);
            if (!title){
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
            });
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
            });
        };
        fs.appendFile("log.txt", "movie-this, ", function(err){
            if (err) {
                console.log(err);
            }
        });
    break;

    case "do-what-it-says":
    fs.readFile("random.txt", "utf8", function(err, data){
        if(err) {
            return console.log(err);
        }
        console.log(data)
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
   
    fs.appendFile("log.txt", "do-what-it-says", function(err){
        if (err) {
            console.log(err);
        }
    });
});
});
    break;
        
};
