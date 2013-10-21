define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/error_404.html' 
], function($, _, Backbone, error_404) {
    return Backbone.View.extend({
        el: $("#main-content"),

        render: function() {

            var compiledTemplate = _.template(error_404);

            this.$el.html(compiledTemplate);
        }
    });
});
