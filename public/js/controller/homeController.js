'use strict';

module.exports = function($scope, $http, $rootScope,$location) {
// $scope.booking = 'booking';
  var refresh = function() {
  $http.get('/movie/movie').success(function(response) {
  console.log('READ IS SUCCESSFUL');
  $scope.moviList = response;
  $scope.mov = "";
  });
  };
  refresh();

  var refreshmps = function () {
        $http.get('/map/map').success(function (response) {
            console.log('READ THEATRE SUCCESSFUL');
            $scope.mapplist = response;
            $scope.mapp = "";
        });
    };

    refreshmps();


  $scope.bookTicket= function (m) {
 $rootScope.bookedMovie=m;
  $location.path('/movie');
          };


          $scope.addreview= function (m) {
          $rootScope.bookedMovie=m;
          $location.path('/review');
                  };

}
