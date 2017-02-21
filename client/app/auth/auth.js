
angular.module('event.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.org = {};
  $scope.event = {};
  $scope.why ={}
  $scope.why2 ={};
  $scope.eventType =[
  "Music",
  "Tech",
  "Sport"
  ];
  

  $scope.logout = function () {
    Auth.signout()
  };

  $scope.userSignin = function () {
    var temp=$scope.user

    Auth.userSignin(temp)
    .then(function (token) {
      $window.localStorage.setItem('com.event', token);
      $location.path('/userProfile');
    })
    .catch(function (error) {
      console.error(error);
    });
  };
  $scope.OrgSignin= function(){
    
    var temp=$scope.org;
    Auth.OrgSignin(temp)
    .then(function(token){
      $window.localStorage.setItem('com.event', token);
      $location.path('/orgProfile')
    })
    .catch(function (error) {
      console.error(error);
    });

  }
  $scope.userSignup = function () {
    
    var temp=$scope.user
    Auth.userSignup(temp)
    .then(function (token) {
      $window.localStorage.setItem('com.event', token);
      Auth.getUserEvent($window.localStorage.getItem('com.event', token));
      $location.path('/userProfile');
    })
    .catch(function (error) {
      console.error(error);
    });
  };
  $scope.OrgnizerSignup = function () {
   
    var temp=$scope.org
    Auth.OrgSignup(temp)
    .then(function (token) {
     $window.localStorage.setItem('com.event', token);
     Auth.getOrgEvent($window.localStorage.getItem('com.event', token))
     
     $location.path('/orgProfile');
   })
    .catch(function (error) {
      console.error(error);
    });
  };
  $scope.CreateEvent = function () {
    var temp=$scope.event
    temp.location2 = $window.localStorage.location2;
    var tok =$window.localStorage.getItem('com.event')
    temp.tok = tok;   
    Auth.createEvent(temp)
    .then(function () {
      $location.path('/orgProfile');
      $scope.bring();
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  $scope.maps= function(location, id) {
    location = location.split(',')
    var amman = { lat: parseFloat(location[0].substr(1)), lng: parseFloat(location[1].substr(0, location[1].length-1)) };

    var map = new google.maps.Map(document.getElementById(id), {
      zoom: 15,
      center: amman
    });

    var marker = new google.maps.Marker({
      position: amman,
      map: map,
      title: 'Hello World!'
    });
  }
  
  $scope.bring=function(){
    Auth.getOrgEvent($window.localStorage.getItem('com.event')).then(function (data) {
     $scope.why.events = data;
   })
    
    
    Auth.getUserEvent($window.localStorage.getItem('com.event')).then(function (data) {
     $scope.why2.events = data;
   })

    
    
  } 
  $scope.bring();


});