/**
 * Created by JetBrains PhpStorm.
 * User: Memo
 * Date: 05.07.2011
 * Time: 11:38
 * To change this template use File | Settings | File Templates.
 */
var FollowManager = function() {

}

FollowManager.prototype.createFollow = function (follower,following) {
        var follow = new Follow(follower.id,following.id);
        localStorage.setObject(follow.id, follow);
};

FollowManager.prototype.getFollowingByUserId = function (userId) {
    var array = [];
    for(var following in localStorage) {
        following = localStorage.getObject(following);
        if(following && following.userId && following.userId==userId) {
            array.push(following)
        }
    }
    return array;
};


FollowManager.prototype.getFollowersByUserId = function (userId) {
    var array = [];
    for(var follower in localStorage) {
        follower = localStorage.getObject(follower);
        if(follower && follower.userId && follower.userId==userId) {
            array.push(follower)
        }
    }
    return array;
};