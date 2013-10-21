define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/inbox.html'
], function($, _, Backbone, inbox) {
    return Backbone.View.extend({
        el: $("#main-content"),
       
        render: function() {

            var compiledTemplate = _.template(inbox);

            this.$el.html(compiledTemplate);
        }
    });
});
