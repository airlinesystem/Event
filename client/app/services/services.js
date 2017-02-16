angular.module('event.services', [])


.factory('Auth', function ($http, $location, $window) {
 
  var userSignin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/userSignin',
      data: user
    })
    .then(function (resp) {
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
       return resp.data.token;
    });
  };

  var createEvent = function(event){
  	return $http({
  		method : 'POST',
  		url :'/api/orgProfile',
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
    $location.path('/signin');
  };

  var getUserEvent = function (tok){
    return $http ({
      method : 'GET',
      url : '/api/userProfile',
      params:{tok:tok}
    }).then(function (resp) {
      return resp.data;
    });
  };
  var getOrgEvent = function (tok){
    return $http ({
      method : 'GET',
      url : '/api/orgProfile',
      params:{tok:tok}
    }).then(function (resp) {
      return resp.data;
    });
  };

  return {
    userSignin : userSignin ,
    OrgSignin : OrgSignin,
    userSignup: userSignup,
    OrgSignup : OrgSignup,
    createEvent : createEvent,
    isAuth: isAuth,
    signout: signout,
    getUserEvent : getUserEvent,
    getOrgEvent : getOrgEvent
  };
});