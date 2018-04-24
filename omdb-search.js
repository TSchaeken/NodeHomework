const request = require("request");
const inquirer = require("inquirer");

function omdbSearch() {
  inquirer
    .prompt([
      {
        name: "movie",
        message: "What movie are you searching for?"
      }
    ])
    .then(function(res) {
      let movie = requestor(res.movie);
      return movie;
    })
    .then(function(res) {
      let response = JSON.parse(res.body)
      console.log('|------------------------------------------|')
      console.log('Movie title: ' + response.Title);
      console.log('Movie release year: '+ response.Year);
      console.log('Movie language: ' + response.Language);
      console.log('Movie plot: ' + response.Plot);
      console.log('Movie IMDB rating: ' + response.Ratings[1].Value);
      console.log('Movie Rotten Tomatoes rating: ' + response.Ratings[0].Value);
      console.log('|------------------------------------------|')
    });
}

function requestor(movie) {
  return new Promise(function(res, rej) {
    request("http://www.omdbapi.com/?t=" + movie +"&apikey=trilogy", function(
      error,
      response,
      body
    ) {
      res(response);
    });
  });
}

module.exports = {
  omdbSearch,
  requestor
};

omdbSearch();