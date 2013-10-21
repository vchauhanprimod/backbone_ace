//initialises all the apps
define('App', [
    'jquery',
    'underscore',
    'backbone',
    'Router',//request routerjs
    'bootstrap'
   // require(["helper/util"], function(util) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
//});

    ], function($, _, Backbone, Router) {
        // Pass in our Router module and call it's initialize function
        function initialize() {
            var app = new Router();

            Backbone.history.start();
        }

        // TODO: error handling with window.onerror
        // http://www.slideshare.net/nzakas/enterprise-javascript-error-handling-presentation

        return {
            initialize: initialize
        };
    });
