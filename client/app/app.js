angular.module('event', [
  'event.services',
  'event.auth',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider,$locationProvider) {
  $routeProvider
    // .when('/signin', {
    //   templateUrl: 'app/auth/signin.html',
    //   controller: 'AuthController'
    // })
    .when('/userSignup', {
      templateUrl: 'app/auth/userSignup.html',
      controller: 'AuthController'
    })
    .otherwise({redirectTo:'/userSignup'})
    $locationProvider.hashPrefix('');
}) 