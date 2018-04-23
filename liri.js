require("dotenv").config();

//node packages

const request = require("request");
const Twitter = require("twitter");
const Spotify = require("node-spotify-api");
const inquirer = require("inquirer");

//extra .js files and .env generated keys

const keys = require("./keys.js");
const spot = require ('./spotify-search');
const spotifySearch = spot.spotifySearch;
const twit = require('./twitter-search');
const twitterSearch = twit.twitterSearch;
const omdb = require("./omdb-search");
const omdbSearch = omdb.omdbSearch;
const special = require("./special");
const specialRead = special.specialRead;

//attaching keys to requests

const spotify = new Spotify(keys.spotify);
const client = new Twitter(keys.twitter);

//inquirer function for CLI

function Start() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Choose an option.",
        choices: [
          "my tweets",
          "spotify this song",
          "movie this",
          "do what it says"
        ]
      }
    ])
    .then(function(res) {
      if (res.choice === "my tweets") {
        twitterSearch();
      } else if (res.choice === "spotify this song") {
        spotifySearch();
      } else if (res.choice === "movie this") {
        omdbSearch();
      } else if (res.choice === "do what it says") {
        specialRead();
      } else {
        console.log("error");
        return;
      }
    });
}

Start();
