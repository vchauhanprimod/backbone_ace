define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/pricing.html'
], function($, _, Backbone, pricing) {
    return Backbone.View.extend({
        el: $("#main-content"),
       
        render: function() {

            var compiledTemplate = _.template(pricing);

            this.$el.html(compiledTemplate);
        }
    });
});
