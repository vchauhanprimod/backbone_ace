define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/typography.html'
], function($, _, Backbone, typography) {
    return Backbone.View.extend({
        el: $("#main-content"),

        render: function() {

            var compiledTemplate = _.template(typography);

            this.$el.html(compiledTemplate);
        }
    });
});
