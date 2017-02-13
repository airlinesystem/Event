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

    .when('/OrgSignup', {
      templateUrl: 'app/auth/OrgSignup.html',
      controller: 'AuthController'
    }).when('/orgProfile', {
      templateUrl: 'app/auth/orgProfile.html',
      controller: 'AuthController'
    }).when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    }).when('/userProfile', {
      templateUrl: 'app/auth/userProfile.html',
      controller: 'AuthController'
    })


    .otherwise({redirectTo:'/signin'})

    $locationProvider.hashPrefix('');
}) 