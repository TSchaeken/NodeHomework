require("dotenv").config();
const inquirer = require('inquirer')
const Twitter = require('twitter')
const keys = require("./keys.js");

const client = new Twitter(keys.twitter);


function twitterSearch (){
    inquirer.prompt([
        {
            type: 'list',
            name: 'user',
            message: 'select who to creep on:',
            choices: [
                'realDonaldTrump',
                'GordonRamsay',
                'ElonMusk',
                'BarackObama'
            ]

        }
    ]).then(function (res) {
        var tweets = invader(res.user);
        return tweets;
    }).then(function (res){
        console.log(res)
    })
}

function invader(name){
    return new Promise(function(res, rej){
        client.get('statuses/user_timeline', {screen_name: name,count: 20, }, function(error, tweets, response) {
            let twit = [];
            for (var i = 0; i < tweets.length; i++){
                twit.push( tweets[i].text )
            }
            res(twit)
         });
    
})
}


module.exports = twitterSearch