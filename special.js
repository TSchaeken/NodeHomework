require("dotenv").config();
//node packages
const request = require("request");
const Twitter = require("twitter");
const Spotify = require("node-spotify-api");
const inquirer = require("inquirer");
const fs = require('fs')
//extra .js files and .env generated keys
const keys = require("./keys.js");
const twitterSearch = require("./twitter-search");
const spotifySearch = require("./spotify-search");
const omdbSearch = require("./omdb-search");
const special = require("./special");
//attaching keys to requests
const spotify = new Spotify(keys.spotify);
const client = new Twitter(keys.twitter);

fs.readFile('./random.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.split(","));
  });