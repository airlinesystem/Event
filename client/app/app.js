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
    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    })
    .otherwise({redirectTo:'/signup'})
    $locationProvider.hashPrefix('');
}) 