(function(angular){
  "use strict";

  angular.module("mod.login", ["satellizer"])
    .controller("ctrl.login", function($scope, $location, $auth) {

      var user = {
        email: $scope.email,
        password: $scope.password
      };

      $auth.login(user)
        .then(function(response) {
          $location.path("/#");
          console.log(response);
          console.log("oui?");
        })
        .catch(function(response) {
          console.log(response);
          console.log("non?");
        });
    });

  })(window.angular);
