
//node packages

require("dotenv").config();
const request = require("request");
const Twitter = require("twitter");
const Spotify = require("node-spotify-api");
const inquirer = require("inquirer");
const fs = require("fs");

//extra .js files and .env generated keys

const spot = require('./spotify-search')
const Songer = spot.Songer;
const twit = require('./twitter-search');
const invader = twit.invader;
const omdb = require('./omdb-search');
const requestor = omdb.requestor;
const special = require('./special');

//attaching keys to requests

const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const client = new Twitter(keys.twitter);


function speshal() {
  return new Promise(function(res, rej) {
    fs.readFile("./random.txt", "utf8", (err, data) => {
      if (err) throw err;
      res(data.split(','))
    })
  });
}

function specialRead(){
  speshal().then(function(res){
    if (res[0] == 'spotify-this-song'){
      Songer(res[1]).then(function(res){
        console.log('hey' + res)
      })
    }

    if (res[0] == 'my-tweets'){
      invader(res[1]).then(function(res){
        console.log('hey' + res)
      })
    }

    if (res[0] == 'movie-this'){
      requestor(res[1]).then(function(res){
        console.log('hey' + res)
      })
    }

    else {
      console.log('nah')
    }
  })
}


module.exports = {specialRead}

specialRead();