(function(angular){
  "use strict";


  angular.module("mod.checkin",['satellizer'])

  // =========================================
  // Controller LISTE
  // =========================================
    .controller("ctrl.checkin.liste", function($scope, $http){

      $scope.displayWeather = function(c) {
        $http({
          method: 'GET',
          url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + c.lat + '&lon=' + c.lng + '&appid=72dc62c8fb5c498073c30f58585331b7&lang=fr'
        }).then(function successCallback(response) {
          c.weather = response.data;
        }, function errorCallback(response) {

        });
      }

      var getChekinList = function() {
        // Simple GET request example:
        $http({
          method: 'GET',
          url: 'http://checkin-api.dev.cap-liberte.com/checkin'
        }).then(function successCallback(response) {
          $scope.checkinListe = response.data;
          console.log(response);
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
      };

      getChekinList();
      $scope.$on('ChekinAdded', function (event) {
        getChekinList();
      });
    })

  // =========================================
  // Controller LocalStorage?
  // =========================================




    // =========================================
    // Controller DETAILS
    // =========================================
    .controller("ctrl.checkin.details", function($scope, $http, $routeParams) {
      $http({
        method: 'GET',
        url: 'http://checkin-api.dev.cap-liberte.com/checkin/'+$routeParams.checkinId
      }).then(function successCallback(response) {
        $scope.checkinDetails = response.data;
        console.log(response);
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
      console.log("ctrl.details");
      console.log($routeParams);
    })


    // =========================================
    // Controller ADD
    // =========================================
    .controller("ctrl.checkin.add", function($rootScope, $scope, $http) {
      console.log("Controller Add");

      $scope.getLocation = function() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            $scope.$apply(function(){
              $scope.la = position.coords.latitude;
              $scope.lo = position.coords.longitude;
            });

          });
        } else {
          alert("La géolocalisation n'est pas supporté par votre navigateur");
        }
      };

      $scope.submit = function() {
        console.log("Submit Checkin: "+$scope.la + " - " + $scope.lo);
        $http({
          method: 'POST',
          data: {
            //lat : $scope.lat,
            //lng : $scope.lng
            lat : $scope.la,
            lng : $scope.lo
            },
          headers : {
            "Content-Type" : undefined
          },
          url: 'http://checkin-api.dev.cap-liberte.com/checkin'
        }).then(function successCallback(response) {
          $rootScope.$broadcast('ChekinAdded');
        }, function errorCallback(response) {
          console.log(response);
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
      };
    /*  .controller('setValuesLocal', function($scope, localStorageService) {
        var table = {
          //lat : $scope.lat,
          //lng : $scope.lng
          lat : $scope.la,
          lng : $scope.lo
          }
          localStorageService.get(table);

          function submit(key, val) {
            return localStorageService.set(key, val);
          };
        // à voir synCheckIn
      }) */


    });



})(window.angular);
