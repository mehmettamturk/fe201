/**
 * Created by JetBrains PhpStorm.
 * User: Memo
 * Date: 05.07.2011
 * Time: 11:37
 * To change this template use File | Settings | File Templates.
 */
goog.provide('twitter.Session');
goog.require('tart.getUId');

twitter.Session = function (userId) {
   this.id = tart.getUId();
   this.userId = userId;
 };

/*
var Session = function (userId) {
   this.id = tart.getUId();
   this.userId = userId;
 };
*/