/**
 * Created by JetBrains PhpStorm.
 * User: Memo
 * Date: 05.07.2011
 * Time: 14:20
 * To change this template use File | Settings | File Templates.
 */

goog.provide('twitter.Follow');
goog.require('tart.getUId');
twitter.Follow = function(followerId, followedId){
    this.id = tart.getUId();
    this.followerId = followerId;
    this.followedId = followedId;

};

   /*
var Follow = function(followerId, followedId){
    this.id = tart.getUId();
    this.followerId = followerId;
    this.followedId = followedId;
    
};*/
