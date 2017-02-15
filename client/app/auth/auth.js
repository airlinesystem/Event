// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('event.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.org = {};
  $scope.event = {};
  $scope.why ={}
  $scope.logout = function () {
    console.log("logout")
    Auth.signout()
  };

  $scope.userSignin = function () {
    Auth.userSignin($scope.user)
    .then(function (token) {
    $window.localStorage.setItem('com.event', token);
    // $scope.why = Auth.getUserEvent();
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
    $scope.why.smthg=token;
    // $window.localStorage.setItem('com.event',token);
    // console.log($window.localStorage.getItem('com.event',token))
    //  Auth.getOrgEvent($window.localStorage.getItem('com.event', token)).then(function (data) {
    // //     //console.log(data)
    //      $scope.why.events = data;
    //      console.log("run plese, but turn the server off first",$scope.why.events)
    //   })
    $location.path('/orgProfile')

    })
    .catch(function (error) {
        console.error(error);
      });

  }
  $scope.userSignup = function () {
    var temp=$scope.user
    console.log(temp)
    Auth.userSignup(temp)
      .then(function (token) {
        $window.localStorage.setItem('com.event', token);
        $scope.events = Auth.getUserEvent();
        $location.path('/userProfile');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.OrgnizerSignup = function () {
    var temp=$scope.org
    console.log(temp)
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
    var tok =$window.localStorage.getItem('com.event')
    console.log(tok);
    temp.tok = tok;   

    console.log($scope.event)
    Auth.createEvent(temp)
      .then(function () {
        // $window.localStorage.setItem('com.event', token);
        
        $location.path('/orgProfile');
      $scope.bring();
      })
      .catch(function (error) {
        console.error(error);
      });
  };
$scope.bring=function(){
console.log($window.localStorage.getItem('com.event')) 
   Auth.getOrgEvent($window.localStorage.getItem('com.event')).then(function (data) {
    //     //console.log(data)
         $scope.why.events = data;
         console.log("run plese, but turn the server off first",$scope.why.events)
  })
}
$scope.bring();


});