define([
 'jquery',
 'underscore',
 'backbone',
 'views/dashboard',
 'views/typography'
], function($, _, Backbone, dashboardview, typographyview) {
 
 var AppRouter = Backbone.Router.extend({
   routes: {
     // Define some URL routes
     /*'dashborad': 'showDashboard',*/
     'typography':'showTypography',
     // Default
     '*actions': 'showDashboard'
   }
 });
 
 var initialize = function(){

   var app_router = new AppRouter;

   app_router.on('route:showDashboard', function(){alert("dashrouter")
 
       // Call render on the module we loaded in via the dependency array
       var dashview = new dashboardview();
       dashboardview.render();
       

   });

 app_router.on('route:showTypography', function(){alert("typorouter")
 
       // Call render on the module we loaded in via the dependency array
       var typoview = new typographyview();
       typoview.render();

   });

   Backbone.history.start();
 };
 return {
   initialize: initialize
 };
});