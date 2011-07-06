/**
 * Created by JetBrains PhpStorm.
 * User: Memo
 * Date: 05.07.2011
 * Time: 11:05
 * To change this template use File | Settings | File Templates.
 */
goog.provide('twitter.TweetModel');
goog.require('twitter.Tweet');


var TweetModel = function() {

};

TweetModel.prototype.postTweet = function (user,body) {
        var tweet = new Tweet(user.id,body);
        localStorage.setObject(tweet.id,tweet);

    };

TweetModel.prototype.removeTweet = function (tweetId) {
        for(var tweetkey in localStorage) {
        tweet = localStorage.getObject(tweetkey);
        if(tweet && tweet.id &&tweet.id == tweetId) {
            localStorage.removeItem(tweetkey);
            return true;
        }
    }
    return false;
    };

TweetModel.prototype.getTweetsByUserId = function (userId) {
   var array = [];
    for(var tweet in localStorage) {
     tweet = localStorage.getObject(tweet);
        if(tweet && tweet.userId && tweet.userId==userId){
        array.push(tweet);
        }
    }
    return array;
};

/*


var TweetModel = function() {

};

TweetModel.prototype.postTweet = function (user,body) {
        var tweet = new Tweet(user.id,body);
        localStorage.setObject(tweet.id,tweet);

    };

TweetModel.prototype.removeTweet = function (tweetId) {
        for(var tweetkey in localStorage) {
        tweet = localStorage.getObject(tweetkey);
        if(tweet && tweet.id &&tweet.id == tweetId) {
            localStorage.removeItem(tweetkey);
            return true;
        }
    }
    return false;
    };

TweetModel.prototype.getTweetsByUserId = function (userId) {
   var array = [];
    for(var tweet in localStorage) {
     tweet = localStorage.getObject(tweet);
        if(tweet && tweet.userId && tweet.userId==userId){
        array.push(tweet);
        }
    }
    return array;
};

    */