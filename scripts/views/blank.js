define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/blank.html'
], function($, _, Backbone, blank) {
    return Backbone.View.extend({
        el: $("#main-content"),
       
        render: function() {

            var compiledTemplate = _.template(blank);

            this.$el.html(compiledTemplate);
        }
    });
});
