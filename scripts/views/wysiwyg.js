define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/wysiwyg.html'
], function($, _, Backbone, wysiwyg) {
    return Backbone.View.extend({
        el: $("#main-content"),
     
        render: function() {

            var compiledTemplate = _.template(wysiwyg);

            this.$el.html(compiledTemplate);
        }
    });
});
