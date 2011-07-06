/**
 * Created by JetBrains PhpStorm.
 * User: Memo
 * Date: 05.07.2011
 * Time: 10:47
 * To change this template use File | Settings | File Templates.
 */
var UserModel = function() {

}

UserModel.prototype.createUser = function (username, password, email) {
        var user = new User(username,password,email) ;
        localStorage.setObject(user.id,user);
    return user;
};

UserModel.prototype.removeUser = function (userId) {

    for(var userkey in localStorage) {
        user = localStorage.getObject(userkey);
        if(user && user.id &&user.id == userId) {
            localStorage.removeItem(userkey);
            return true;
        }
    }
    return false;
};

UserModel.prototype.login = function (username,password) {

    for(var user in localStorage) {
     user = localStorage.getObject(user);
        if(user && user.username && user.password && user.username == username && user.password == password){
            var session = new Session(user.id);
            localStorage.setObject("session", session);
            return true;
        }
    }
    return false;
};
UserModel.prototype.logout = function () {
    localStorage.removeItem(session);
};

UserModel.prototype.getUserById = function (userId) {
    for(var item in localStorage) {
        item = localStorage.getObject(item);
        if(item && item.userId && item.userId==userId) {
            return item;
        }
    }
};

UserModel.prototype.getUserByUsername = function (username) {
    for(var item in localStorage) {
        item = localStorage.getObject(item);
        if(item && item.username && item.username==username) {
            return item;
        }
    }
};