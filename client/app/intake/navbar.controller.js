'use strict';

angular.module('sfhncApp')
  .controller('IntakeNavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'Assessment',
      'link': '#intake'
    },{
      'title': 'General',
      'link': '#general'
    },{
      'title': 'Referral',
      'link':   '#referral'
    },{
      'title':  'Demographics',
      'link':   '#demographics'
    },

    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });