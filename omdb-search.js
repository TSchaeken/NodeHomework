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
      let mmmmm = requestor(res.movie);
      return mmmmm;
    })
    .then(function(res) {
      console.log(res);
    });
}

function requestor(movie) {
  return new Promise(function(res, rej) {
    request("http://www.omdbapi.com/?apikey=trilogy&t=" + movie, function(
      error,
      response,
      body
    ) {
      res(response);
    });
  });
}

module.exports = omdbSearch
