'use strict';
(function(){
angular.module( 'sf.intake', [
        'ui.router'
])
.config(function ($stateProvider) {
    $stateProvider
      .state('intake', {
        url: '/intake',
        templateUrl: 'app/intake/intake.tpl.html',
        controller: 'IntakeCtrl'
      });
  })
.controller('IntakeCtrl', function($http) {
  this.submit = function(isValid, data) {
    if(!isValid) return;

    //submit the data to the server
    $http.post('/api/submit', data);
  }
});

})();