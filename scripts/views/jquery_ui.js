define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/jquery_ui.html'
], function($, _, Backbone, jquery_ui) {
    return Backbone.View.extend({
        el: $("#main-content"),

        render: function() {

            var compiledTemplate = _.template(jquery_ui);

            this.$el.html(compiledTemplate);
        }
    });
});
