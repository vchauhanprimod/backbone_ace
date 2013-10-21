define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/error_500.html'
], function($, _, Backbone, error_500) {
    return Backbone.View.extend({
        el: $("#main-content"),
    
        render: function() {

            var compiledTemplate = _.template(error_500);

            this.$el.html(compiledTemplate);
        }
    });
});
