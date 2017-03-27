'use strict';

module.exports = function($scope, $http,$rootScope,$location) {

  $scope.cnf=$rootScope.bookedCab;
  var refreshConfirm= function () {
        $http.get('/cnfm/cnfm').success(function (response) {
            console.log('cab Book READ IS SUCCESSFUL');
            $scope.cndetaillist = response;
            $scope.cndetail = "";
        });
    };

    refreshConfirm();

  $scope.ConfirmBook = function () {
    $scope.cndetail.Cid=$scope.cnf.id;
    $scope.cndetail.Csource=$scope.cnf.source;
    $scope.cndetail.CDesination=$scope.cnf.Desination;
    $scope.cndetail.CType=$scope.cnf.Type;
    $scope.cndetail.CPickTime=$scope.cnf.PickTime;
    $scope.cndetail.CPickdate=$scope.cnf.Pickdate;


      $http.post('/cnfm/cnfm', $scope.cndetail).success(function (response) {
          console.log(response);
          console.log("Book CREATE IS SUCCESSFUL");
          refreshConfirm();
      });

$location.path('/home');
  };


};
