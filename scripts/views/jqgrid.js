define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/jqgrid.html'
], function($, _, Backbone, jqgrid) {
    return Backbone.View.extend({
        el: $("#main-content"),

        render: function() {

            var compiledTemplate = _.template(jqgrid);

            this.$el.html(compiledTemplate);
        }
    });
});
