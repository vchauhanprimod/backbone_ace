define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/gallery.html'
], function($, _, Backbone, gallery) {
    return Backbone.View.extend({
        el: $("#main-content"),
       
        render: function() {

            var compiledTemplate = _.template(gallery);

            this.$el.html(compiledTemplate);
        }
    });
});
