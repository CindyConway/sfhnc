(function(){
angular.module( 'sf.exit', [
        'ui.router'
])
.config(function ($stateProvider) {
    $stateProvider
      .state('exit', {
        url: '/exit',
        templateUrl: 'app/exit/exit.tpl.html',
        controller: 'ExitCtrl'
      });
  })
.controller('ExitCtrl', function ($scope) {

  });

})();

