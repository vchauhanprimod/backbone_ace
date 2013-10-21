define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/login.html'
], function($, _, Backbone, login) {
    return Backbone.View.extend({
        el: $("#main-content"),
        
        render: function() {

            var compiledTemplate = _.template(login);

            this.$el.html(compiledTemplate);
        }
    });
});
