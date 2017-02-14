angular.module('event.services', [])


.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var userSignin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/userSignin',
      data: user
    })
    .then(function (resp) {
      console.log(resp.data.token)
      return resp.data.token;
    });
  };

  var userSignup = function (user) {
  console.log(user)
    return $http({
      method: 'POST',
      url: '/api/userSignup',
      data: user
    })
    .then(function (resp) {
     console.log(resp)
     return resp.data.token;
    });
  };
   var OrgSignin = function (org) {
    return $http({
      method: 'POST',
      url: '/api/orgSignin',
      data: org
    })
    .then(function (resp) {

    console.log(resp.data)
       return resp.data.token;
    });
  };
   var OrgSignin = function (org) {
    return $http({
      method: 'POST',
      url: '/api/orgSignin',
      data: org
    })
    .then(function (resp) {
     
      return resp.data.token;
    });
  };
  var OrgSignup = function(org){
    return $http({
      method: 'POST',
      url: '/api/OrgSignup',
      data: org
    })
    .then(function (resp) {
      console.log(resp)
       return resp.data.token;
    });
  };

  var createEvent = function(event){
  	return $http({
  		method : 'POST',
  		url :'api/orgProfile',
  		data : event
  	})
  	.then(function(event){
  		return event
  	});
  }
  
  var isAuth = function () {
    return !!$window.localStorage.getItem('com.event');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.event');
    console.log( $window.localStorage.getItem('com.event'))
    $location.path('/signin');
  };


  return {
    userSignin : userSignin ,
    OrgSignin : OrgSignin,
    userSignup: userSignup,
    OrgSignup : OrgSignup,
    createEvent : createEvent,
    isAuth: isAuth,
    signout: signout
  };
});