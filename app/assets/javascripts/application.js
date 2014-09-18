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
//= require angular.min
//= require angular-route.min
//= require angular-resource.min
//= require_tree ./controllers
//= require_tree ./directives
//= require_tree ./filters
//= require_tree ./services

(function() {
  app = angular.module('app', ['ngRoute', 'ngResource'])

  app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
    .when('/task', { templateUrl: '../assets/task/list.html', controller: 'TaskControllerList' } )
    .when('/task/new', { templateUrl: '../assets/task/new.html', controller: 'TaskControllerForm' })
    .when('/task/edit/:id', { templateUrl: '../assets/task/edit.html', controller: 'TaskControllerForm' })
    .otherwise({ redirectTo: '/task' })

  }])

  app.config(["$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }]);
})();