/**
 * Created by JetBrains PhpStorm.
 * User: Memo
 * Date: 14.07.2011
 * Time: 15:23
 * To change this template use File | Settings | File Templates.
 */
goog.provide('twitter');
goog.provide('twitter.index');
goog.require('twitter.UserModel');
goog.require('tart');
goog.require('tart.storage.Storage');

twitter.index = function() {

var userModel = new twitter.UserModel();
var followManager = new twitter.FollowManager();
var tweetModel = new twitter.TweetModel();


var log = function(username,password) {
        //var username = document.getElementById('user').value;
        //var password = document.getElementById('pass').value;
        var login = userModel.login(username,password);
        if(!login) { alert("you are not a member"); }
        else     {  alert("logged in");

                    window.location.reload();
        }
};

$(document).ready(function(){
    var session = storage.get("session");
    if(!session) {
        var $login = $("<form name='login'>");
        var $username = $("<input type='text' id='user'>");
        var $password = $("<input type='password' id='pass'>");
        var $button = $("<button style='height: 30px; width: 100px; color: #cd853f;'>");
        $button.html('Login');
        $button.click(function(){
           log($username.val(),$password.val());
        });
        $login.append($username).append($password);
        $("body").append($login).append($button);
    }

    else {
        var $main = $("<div id='main'>");
        var $welcomeMessage = $("<span>");
        $welcomeMessage.html("Welcome"+" username");
        var $logoutButton = $("<button>");
        $logoutButton.html("Logout");
        $logoutButton.click(function() {
            userModel.logout();
            window.location.reload();
        });
        $main.append($welcomeMessage).append($logoutButton);
        $("body").append($main);


    }

});

};

goog.exportSymbol('twitter.index', twitter.index);

