require("dotenv").config();
const keys = require("./keys.js");
const inquirer = require("inquirer");
const Spotify = require("node-spotify-api");

const spotify = new Spotify(keys.spotify);

function Songer(song = "The Sign") {
  return new Promise(function(res, req) {
    spotify.search({ type: "track", query: song, limit: 1 }, function(
      err,
      data
    ) {
      if (err) {
        return console.log("Error occurred: " + err);
      }

      console.log(data.tracks.items);
    });
  })
}


function spotifySearch(){
    inquirer.prompt([
        {
            name: 'song',
            message: 'What song would you like to look up?'
        }
    ]).then(function(res){
        var song = Songer(res.song)
        return song
    }).then(function(res){
        console.log(res)
    })
}

module.exports = spotifySearch