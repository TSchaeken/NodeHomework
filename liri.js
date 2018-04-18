require('dotenv').config()

const request = require('request');
const Twitter = require('twitter')
const Spotify = require('node-spotify-api');
const keys = require('./keys.js')

const spotify = new Spotify(keys.spotify);
const client = new Twitter(keys.twitter);

