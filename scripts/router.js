// Definining modules for require.js
define([ 
    'jquery',
    'underscore',
    'backbone',
    'views/error_404',
    'views/buttons',
    'views/dashboard',
    'views/calendar',
    'views/typography',
    'views/elements',
    'views/blank',
    'views/dropzone',
    'views/faq',
    'views/form_elements',
    'views/form_wizard',
    'views/gallery',
    'views/grid',
    'views/inbox',
    'views/invoice',
    'views/jqgrid',
    'views/jquery_ui',
    'views/login',
    'views/nestable_list',
    'views/pricing',
    'views/profile',
    'views/tables',
    'views/timeline',
    'views/treeview',
    'views/widgets',
    'views/wysiwyg',
    'views/error_500'
], function($, _, Backbone,
    error_404, buttons, dashboard, calendar, typography, ui_elements, blank, dropzone, faq, form_elements, form_wizard, gallery, grid, inbox, invoice,
    jqgrid, jquery_ui, login, nestable_list, pricing, profile, tables, timeline, treeview, widgets, wysiwyg, error_500) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Implements the dynamic routing
            ':route': 'loadView', 
            '#dashboard':'loadview',
            '*actions': 'loadView'
        }
    });

    var initialize = function() {

        var app_router = new AppRouter;

        // 'route' has the current routing path
        app_router.on('route:loadView', function(route) { 
            // Slices the routing path from '/'
            route = route.slice(route.lastIndexOf('/') + 1, route.length);
            if (route == '') {
                var view = new dashboard();
                view.render();
            } else {
                // Put try catch because route may have some nonexisting view name
                try {  
                    var view = null;
                    eval('view= new ' + route + '()');
                    view.render();
                } catch (e) {
                    // Route to 404 page
                    var view= new error_404();
                    view.render();
                }
            }
        })
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
