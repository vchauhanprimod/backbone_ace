define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/elements.html'
], function($, _, Backbone, elements) {
    return Backbone.View.extend({
        el: $("#main-content"),
      
        render: function() {

            var compiledTemplate = _.template(elements);

            this.$el.html(compiledTemplate);
        }
    });
});
