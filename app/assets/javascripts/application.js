// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require angular/angular.min
//= require angular-route/angular-route.min
//= require angular-resource/angular-resource.min
//= require angular-i18n/angular-locale_pt-br
//= require_tree ./controllers
//= require_tree ./directives
//= require_tree ./filters
//= require_tree ./services

(function() {
  app = angular.module('app', ['ngRoute', 'ngResource'])

  app.controller('TaskControllerList', ['$scope', '$http', TaskController.list]);
  app.controller('TaskControllerForm', ['$scope', '$location', '$routeParams', '$http', TaskController.form]);
  app.controller('CommentControllerList', ['$scope', '$routeParams', '$http', CommentController.list]);
  app.controller('CommentControllerForm', ['$scope', '$routeParams', '$http', CommentController.form]);

  app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

    $routeProvider
    .when('/task', { templateUrl: 'templates/task/list.html', controller: 'TaskControllerList' } )
    .when('/task/new', { templateUrl: 'templates/task/form.html', controller: 'TaskControllerForm' })
    .when('/task/edit/:id', { templateUrl: 'templates/task/form.html', controller: 'TaskControllerForm' })
    .otherwise({ redirectTo: '/task' })

    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

  }])

})();