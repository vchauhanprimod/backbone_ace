define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/tables.html'
], function($, _, Backbone, tables) {
    return Backbone.View.extend({
        el: $("#main-content"),

        render: function() {

            var compiledTemplate = _.template(tables);

            this.$el.html(compiledTemplate);
        }
    });
});
