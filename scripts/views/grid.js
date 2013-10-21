define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/grid.html'
], function($, _, Backbone, grid) {
    return Backbone.View.extend({
        el: $("#main-content"),
       
        render: function() {

            var compiledTemplate = _.template(grid);

            this.$el.html(compiledTemplate);
        }
    });
});
