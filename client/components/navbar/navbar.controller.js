'use strict';

angular.module('sfhncApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'Intake',
      'link': '/intake'
    },{
      'title': 'Exit',
      'link': '/exit'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });