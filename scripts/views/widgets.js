define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/widgets.html'
], function($, _, Backbone, widgets) {
    return Backbone.View.extend({
        el: $("#main-content"),
        
        render: function() {

            var compiledTemplate = _.template(widgets);

            this.$el.html(compiledTemplate);
        }
    });
});
