requirejs.config({
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: 'bootstrap'
    }
  },
  /**
   * HACK:
   * Modified Underscore and Backbone to be AMD compatible (define themselves)
   * since it didn't work properly with the RequireJS shim when optimizing
   */
  paths: {
    'text'             : 'lib/text',
    'jquery'           : 'lib/jquery',
    'underscore'       : 'lib/underscore-amd',
    'backbone'         : 'lib/backbone-amd',
    'bootstrap'        : 'lib/bootstrap',
    'App'              : 'app',
    'Router'           : 'router',
    'typographyView'   : 'views/typography',
    'dashboardView'   : 'views/dashboard'
  }
});

require(['App'], function(App) {
  App.initialize();
});




