//initialises all the apps
define([
    'jquery',
    'underscore',
    'backbone',
    'router',//request routerjs
    
   // require(["helper/util"], function(util) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
//});

    ], function($, _, Backbone, Router) {
        // Pass in our Router module and call it's initialize function
        return{
            initialize: function(){alert("app")
                Router.initialize();
            }
        }
    });
