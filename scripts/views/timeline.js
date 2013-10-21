define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/timeline.html'
], function($, _, Backbone, timeline) {
    return Backbone.View.extend({
        el: $("#main-content"),
       
        render: function() {

            var compiledTemplate = _.template(timeline);

            this.$el.html(compiledTemplate);
        }
    });
});
