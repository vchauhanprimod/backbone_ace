define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/profile.html'
], function($, _, Backbone, profile) {
    return Backbone.View.extend({
        el: $("#main-content"),
      
        render: function() {

            var compiledTemplate = _.template(profile);

            this.$el.html(compiledTemplate);
        }
    });
});
