define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/faq.html'
], function($, _, Backbone, faq) {
    return Backbone.View.extend({
        el: $("#main-content"),
       
        render: function() {

            var compiledTemplate = _.template(faq);

            this.$el.html(compiledTemplate);
        }
    });
});
