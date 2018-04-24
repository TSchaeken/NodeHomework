require("dotenv").config();
const keys = require("./keys.js");
const inquirer = require("inquirer");
const Spotify = require("node-spotify-api");

const spotify = new Spotify(keys.spotify);

function Songer(song = "The Sign") {
  return new Promise(function(resolve, reject) {
    spotify.search({ type: "track", query: song, limit: 1 }, function(
      err,
      data
    ) {
      if (err) {
        return console.log("Error occurred: " + err);
      }
      resolve(data);
    });
  });
}

var song;

function spotifySearch() {
  inquirer
    .prompt([
      {
        name: "song",
        message: "What song would you like to look up?"
      }
    ])
    .then(function(res) {
      song = res.song
      var info = Songer(res.song);
      return info;
    })
    .then(function(res) {
      let response = res.tracks.items[0].album;
      console.log('|------------------------------------------|')
      console.log(`You searched for ${song}`);
      console.log(`Album with ${song}: ` + response.name);
      console.log(`Artist who performed ${song}: ` + response.artists[0].name);
      console.log(`Preview of ${song}: ` + JSON.stringify(response.external_urls.spotify, null, 4));
      console.log('|------------------------------------------|')
    });
}

module.exports = {
  Songer,
  spotifySearch
};

spotifySearch();

// [ { album:
//   { album_type: 'album',
//     artists: [Array],
//     available_markets: [Array],
//     external_urls: [Object],
//     href: 'https://api.spotify.com/v1/albums/5ll74bqtkcXlKE7wwkMq4g',
//     id: '5ll74bqtkcXlKE7wwkMq4g',
//     images: [Array],
//     name: 'Late Registration',
//     release_date: '2005-09-30',
//     release_date_precision: 'day',
//     type: 'album',
//     uri: 'spotify:album:5ll74bqtkcXlKE7wwkMq4g' },
//  artists: [ [Object], [Object] ],
//  available_markets: [ 'CA', 'MX', 'US' ],
//  disc_number: 1,
//  duration_ms: 207626,
//  explicit: true,
//  external_ids: { isrc: 'USUM70500143' },
//  external_urls:
//   { spotify: 'https://open.spotify.com/track/1PS1QMdUqOal0ai3Gt7sDQ' },
//  href: 'https://api.spotify.com/v1/tracks/1PS1QMdUqOal0ai3Gt7sDQ',
//  id: '1PS1QMdUqOal0ai3Gt7sDQ',
//  name: 'Gold Digger',
//  popularity: 76,
//  preview_url: null,
//  track_number: 4,
//  type: 'track',
//  uri: 'spotify:track:1PS1QMdUqOal0ai3Gt7sDQ' } ]
