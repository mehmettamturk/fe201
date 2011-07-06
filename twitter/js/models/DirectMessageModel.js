/**
 * Created by JetBrains PhpStorm.
 * User: Memo
 * Date: 05.07.2011
 * Time: 11:06
 * To change this template use File | Settings | File Templates.
 */
goog.provide('twitter.DirectMessageModel');
goog.require('twitter.DirectMessage');
twitter.DirectMessageModel = function() {

};

twitter.DirectMessageModel.prototype.sendDirectMessage = function (from,to,body) {
    var directMessage = new DirectMessage(from.id, to.id, body);
    localStorage.setObject(directMessage.id,directMessage);
    };

twitter.DirectMessageModel.prototype.getInboxByUserId = function (userId) {
    var array = [];
    for(var directMessage in localStorage) {
     directMessage = localStorage.getObject(directMessage);
        if(directMessage && directMessage.to.user.id && directMessage.to.user.id==userId){
        array.push(directMessage);
        }
    }
    return array;
    };

twitter.DirectMessageModel.prototype.getSentByUserId = function (userId) {
    var array = [];
    for(var directMessage in localStorage) {
     directMessage = localStorage.getObject(directMessage);
        if(directMessage && directMessage.from.user.id && directMessage.from.user.id==userId){
        array.push(directMessage);
        }
    }
    return array;
    };



/*
var DirectMessageModel = function() {

};

DirectMessageModel.prototype.sendDirectMessage = function (from,to,body) {
    var directMessage = new DirectMessage(from.id, to.id, body);
    localStorage.setObject(directMessage.id,directMessage);
    };

DirectMessageModel.prototype.getInboxByUserId = function (userId) {
    var array = [];
    for(var directMessage in localStorage) {
     directMessage = localStorage.getObject(directMessage);
        if(directMessage && directMessage.to.user.id && directMessage.to.user.id==userId){
        array.push(directMessage);
        }
    }
    return array;
    };

DirectMessageModel.prototype.getSentByUserId = function (userId) {
    var array = [];
    for(var directMessage in localStorage) {
     directMessage = localStorage.getObject(directMessage);
        if(directMessage && directMessage.from.user.id && directMessage.from.user.id==userId){
        array.push(directMessage);
        }
    }
    return array;
    };*/