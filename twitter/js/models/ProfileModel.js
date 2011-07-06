/**
 * Created by JetBrains PhpStorm.
 * User: Memo
 * Date: 05.07.2011
 * Time: 11:06
 * To change this template use File | Settings | File Templates.
 */

goog.provide('twitter.ProfileModel');
goog.require('twitter.Profile');

twitter.ProfileModel = function() {

};

twitter.ProfileModel.prototype.createProfile = function (bio,photoUrl,location) {
        var profile = new Profile(bio,photoUrl,location) ;
        localStorage.setItem(profile.id,profile);
};

twitter.ProfileModel.prototype.getProfileByUserId = function (userId) {
    for(var profile in localStorage) {
        profile = localStorage.getObject(profile);
        if(profile && profile.userId && profile.userId==userId) {
            return profile;
        }
    }
    return false;
};
twitter.ProfileModel.prototype.editProfileByUserId = function (userId,bio,photoUrl,location) {
        for(var profile in localStorage) {
            profile = localStorage.getObject(profile);
            if(profil && profile.userId && profile.userId==userId) {
             profile.bio = bio;
             profile.photoUrl = photoUrl;
             profile.location = location;
             localStorage.setObject(profile.id,profile);

        }
        }
};


/*

    var ProfileModel = function() {

};

ProfileModel.prototype.createProfile = function (bio,photoUrl,location) {
        var profile = new Profile(bio,photoUrl,location) ;
        localStorage.setItem(profile.id,profile);
};

ProfileModel.prototype.getProfileByUserId = function (userId) {
    for(var profile in localStorage) {
        profile = localStorage.getObject(profile);
        if(profile && profile.userId && profile.userId==userId) {
            return profile;
        }
    }
    return false;
};
ProfileModel.prototype.editProfileByUserId = function (userId,bio,photoUrl,location) {
        for(var profile in localStorage) {
            profile = localStorage.getObject(profile);
            if(profil && profile.userId && profile.userId==userId) {
             profile.bio = bio;
             profile.photoUrl = photoUrl;
             profile.location = location;
             localStorage.setObject(profile.id,profile);

        }
        }
};

    */