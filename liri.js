require("dotenv").config();

//node packages

const request = require("request");
const Twitter = require("twitter");
const Spotify = require("node-spotify-api");
const inquirer = require("inquirer");

//extra .js files and .env generated keys

const keys = require("./keys.js");
const twitterSearch = require("./twitter-search");
const spotifySearch = require("./spotify-search");
const omdbSearch = require("./omdb-search");
const special = require("./special");

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
      } else {
        console.log("error");
        return;
      }
    });
}

Start();
