define([
 'jquery',
 'underscore',
 'backbone',
 'dashboardview',
 'typographyview',
], function($, _, Backbone, dashboradview, typographyview) {
 
 var AppRouter = Backbone.Router.extend({
   routes: {
     // Define some URL routes
     'dashborad': 'showDashboard',
     'typography':'showTypography',
     // Default
     '*actions': 'defaultAction'
   }
 });
 
 var initialize = function(){

   var app_router = new AppRouter;

   app_router.on('route:showDashboard', function(){
 
       // Call render on the module we loaded in via the dependency array
       var dashboardview = new dashboardview();
       dashboardview.render();
       

   });

 app_router.on('route:showTypography', function(){
 
       // Call render on the module we loaded in via the dependency array
       var typographyview = new typographyview();
       typographyview.render();

   });

   Backbone.history.start();
 };
 return {
   initialize: initialize
 };
});