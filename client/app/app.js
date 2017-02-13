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
<<<<<<< HEAD
    .when('/OrgSignup', {
      templateUrl: 'app/auth/OrgSignup.html',
      controller: 'AuthController'
    })
    .otherwise({redirectTo:'/signup'})
=======
    .otherwise({redirectTo:'/userSignup'})
>>>>>>> bc64339ca7d7bbc3b2a9c57420e6af219edf6ce2
    $locationProvider.hashPrefix('');
}) 