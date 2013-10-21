define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/calendar.html'
], function($, _, Backbone, calendar) {
    return Backbone.View.extend({
        el: $("#main-content"),

        render: function() {

            var compiledTemplate = _.template(calendar);

            this.$el.html(compiledTemplate);
        }
    });
});
