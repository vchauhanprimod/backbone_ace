define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/form_elements.html'
], function($, _, Backbone, form_elements) {
    return Backbone.View.extend({
        el: $("#main-content"),

        render: function() {

            var compiledTemplate = _.template(form_elements);

            this.$el.html(compiledTemplate);
        }
    });
});
