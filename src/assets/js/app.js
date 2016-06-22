(function(angular){
  "use strict";

  angular.module("myApp",
  [
    "ngRoute",
    "ngMap",
    "LocalStorageModule",
    "mod.hello",
    "mod.contact",
    "mod.checkin",
    "mod.login"
  ])


  .config(function($routeProvider, $authProvider, $httpProvider){
    $routeProvider
    .when('/', {
      templateUrl: "./assets/template/checkinListe.html",
      controller: "ctrl.checkin.liste"

    })
    .when('#', {
      templateUrl: "./assets/template/checkinListe.html",
      controller: "ctrl.checkin.liste"

    })
    .when('/index', {
      templateUrl: "./assets/template/checkinListe.html",
      controller: "ctrl.checkin.liste"

    })
    .when("/id/:ID", {
      templateUrl: "./assets/template/checkinDetails.html",
      controller: "ctrl.checkin.details"
    })

    .when('/add', {
      templateUrl: "./assets/template/checkinAdd.html",
      controller: "ctrl.checkin.add"
    })
    .when ('/login', {
      templateUrl: "./assets/template/login.html",
      controller: "ctrl.login"
    })
    .when ('/logout', {
      templateUrl: "./assets/template/logout.html",
      controller: "ctrl.logout"
    });

    $authProvider.httpInterceptor = function() { return true; },
    $authProvider.withCredentials = false;
    $authProvider.tokenRoot = null;
    $authProvider.cordova = false;
    $authProvider.baseUrl = 'http://checkin-api.dev.cap-liberte.com';
    $authProvider.loginUrl = '/auth';
    $authProvider.signupUrl = '/auth/signup';
    $authProvider.unlinkUrl = '/auth/unlink/';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'satellizer';
    $authProvider.authHeader = 'Authorization';
    $authProvider.authToken = 'Bearer';
    $authProvider.storageType = 'localStorage';


$httpProvider.defaults.headers.post = {};
  });
})(window.angular);
