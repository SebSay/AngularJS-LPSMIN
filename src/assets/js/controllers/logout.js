(function(angular){
  "use strict";

angular.module('mod.logout',["satellizer", "toaster"])
  .controller('ctrl.logout', function($location, $auth, toaster) {
    if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
        toaster.info('You have been logged out');
        $location.path('/');
      });
  });

    })(window.angular);
