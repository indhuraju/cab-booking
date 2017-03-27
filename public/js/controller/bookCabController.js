'use strict';

module.exports = function($scope, $http,$rootScope,$location) {

                  
var refreshCab = function () {
            $http.get('/cb/cb').success(function (response) {
              console.log('READ IS SUCCESSFUL');
                $scope.cabslist = response;
                $scope.cabs = "";
            });
        };

        refreshCab();

        $scope.booking = 'cabbooking';
    $scope.showd=false;
  $scope.booking="";
  
$scope.GetRoute=function () {
  $scope.showd=true;
  $http.get('/cb/cb').success(function(response) {
  $scope.cabslist = response;
  for(i=0;i<$scope.cabslist.length;i++)
  {
if($scope.cabslist[i].CarName==$scope.CarName && $scope.cabslist[i].CarName==$scope.CabAmount)
{
  $scope.booking=$scope.cabslist[i];
  console.log($scope.CarName);
           console.log($scope.CabAmount);

           $scope.cabslist = response[i];
           $scope.cabs = "";
           console.log(response[i]);
}}});
}



    var refreshBook = function () {
          $http.get('/bkcb/bkcb').success(function (response) {
              console.log('cab Book READ IS SUCCESSFUL');
              $scope.bokclist = response;
              $scope.bokc = "";
          });
      };

      refreshBook();



      var clicked;

    $scope.clickBook = function () {
      $scope.bokc.Source=source;
        $scope.bokc.Desination=destination;
        $scope.bokc.Type=type;
        $scope.bokc.Pickdate=document.getElementById("dateT").value;
        $scope.bokc.PickTime=document.getElementById("timeT").value;
        clicked='BK' + Math.random().toString(10).substr(2,5);
      $scope.bokc.id=clicked;

        console.log($scope.bokc);
        $http.post('/bkcb/bkcb', $scope.bokc).success(function (response) {
            console.log(response);
            console.log("Book CREATE IS SUCCESSFUL");
            refreshBook();
        });

        $rootScope.bookedCab=$scope.bokc;
$location.path('/confirmation');
    };


};

