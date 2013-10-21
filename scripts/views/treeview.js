define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/treeview.html'
], function($, _, Backbone, treeview) {
    return Backbone.View.extend({
        el: $("#main-content"),

        render: function() {

            var compiledTemplate = _.template(treeview);

            this.$el.html(compiledTemplate);
        }
    });
});
