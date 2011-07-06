/**
 * Created by JetBrains PhpStorm.
 * User: Memo
 * Date: 05.07.2011
 * Time: 11:22
 * To change this template use File | Settings | File Templates.
 */
goog.provide('twitter.DirectMessage');
goog.require('tart.getUId');
goog.require('tart.randomTime');
twitter.DirectMessage = function(from , to, body){
    this.id = tart.getUId();
    this.from = from;
    this.to = to;
    this.body = body;
};


/*
var DirectMessage = function(from , to, body){
    this.id = tart.getUId();
    this.from = from;
    this.to = to;
    this.body = body;
};
*/