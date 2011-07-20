goog.require('twitter');
goog.require('twitter.Application');
goog.require('tart.storage.Storage');
goog.provide('twitter.Bootstrapper');


/**
 * Bootstrapper of the example application.
 * @constructor
 */
twitter.Bootstrapper = function() {

    storage = new tart.storage.Storage();
    new twitter.Application();

};

goog.exportSymbol('twitter.Bootstrapper', twitter.Bootstrapper);
