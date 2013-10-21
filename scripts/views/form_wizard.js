define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/form_wizard.html'
], function($, _, Backbone, form_wizard) {
    return Backbone.View.extend({
        el: $("#main-content"),

        render: function() {

            var compiledTemplate = _.template(form_wizard);

            this.$el.html(compiledTemplate);
        }
    });
});
