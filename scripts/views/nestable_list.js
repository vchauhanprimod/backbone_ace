define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/nestable_list.html'
], function($, _, Backbone, nestable_list) {
    return Backbone.View.extend({
        el: $("#main-content"),

        render: function() {

            var compiledTemplate = _.template(nestable_list);

            this.$el.html(compiledTemplate);
        }
    });
});
