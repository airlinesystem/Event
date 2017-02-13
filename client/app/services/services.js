angular.module('event.services', [])


.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  // var userSignin = function (user) {
  //   return $http({
  //     method: 'POST',
  //     url: '/api/users/signin',
  //     data: user
  //   })
  //   .then(function (resp) {
  //     return resp.data.token;
  //   });
  // };

  var userSignup = function (user) {
  console.log(user)
    return $http({
      method: 'POST',
      url: '/api/userSignup',
      data: user
    })
    .then(function (user) {
      console.log('in services')
      console.log(user)
       return user
    });
  };

  var OrgSignup = function(org){
    return $http({
      method: 'POST',
      url: '/api/OrgSignup',
      data: org
    })
    .then(function (org) {
      console.log(org)
       return org
    });
  };
  
  // var isAuth = function () {
  //   return !!$window.localStorage.getItem('com.shortly');
  // };

  // var signout = function () {
  //   $window.localStorage.removeItem('com.shortly');
  //   $location.path('/signin');
  // };


  return {
    // signin: signin,
    userSignup: userSignup,
    OrgSignup:OrgSignup
    // isAuth: isAuth,
    // signout: signout
  };
});