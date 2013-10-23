define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/dashboard.html'
], function($, _, Backbone, dashboard) {
    return Backbone.View.extend({
        el: $("#main-content"),

        render: function() {

            var compiledTemplate = _.template(dashboard);

            this.$el.html(compiledTemplate);
            
        }
    });
    //Backbone.history.start();
});
