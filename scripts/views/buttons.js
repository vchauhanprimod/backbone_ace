define([
    'jquery',
    'underscore',
    'backbone',
    // Using the Require.js text! plugin, we are loaded raw text  
    // which will be used as our views primary template

    'text!templates/buttons.html' 
], function($, _, Backbone, buttons) {
    return Backbone.View.extend({
        el: $("#main-content"),

        render: function() {

            var compiledTemplate = _.template(buttons);

            this.$el.html(compiledTemplate);
        }
    });
});
