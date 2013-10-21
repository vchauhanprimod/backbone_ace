define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/invoice.html'
], function($, _, Backbone, invoice) {
    return Backbone.View.extend({
        el: $("#main-content"),
       
        render: function() {

            var compiledTemplate = _.template(invoice);

            this.$el.html(compiledTemplate);
        }
    });
});
