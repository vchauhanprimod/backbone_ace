define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/dropzone.html'
], function($, _, Backbone, dropzone) {
    return Backbone.View.extend({
        el: $("#main-content"),
        
        render: function() {

            var compiledTemplate = _.template(dropzone);

            this.$el.html(compiledTemplate);
        }
    });
});
