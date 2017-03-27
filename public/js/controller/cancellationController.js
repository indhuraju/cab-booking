'use strict';

module.exports = function($scope, $http,$log) {



      var refreshCar = function () {
            $http.get('/c/c').success(function (response) {
              console.log('READ IS SUCCESSFUL');
                $scope.carslist = response;
                $scope.cars = "";
            });
        };

        refreshCar();

        $scope.addCar = function () {
            console.log($scope.cars);
            $http.post('/c/c', $scope.cars).success(function (response) {
                console.log(response);
                console.log("CREATE IS SUCCESSFUL");
                refreshCar();
            });
        };

        $scope.removeCar = function (id) {
            console.log(id);
            $http.delete('/c/c/' + id._id).success(function (response) {
                console.log(response);
                console.log('DELETED SUCCESSFULLY');
                refreshCar();
            });
        };

        $scope.editCar = function (id) {
             $http.get('/c/c/' + id._id).success(function (response) {
                $scope.cars = response[0];
            });
        };

        $scope.updateCar = function () {
            console.log("REACHED UPDATE");
            console.log($scope.cars._id);
            $http.put('/c/c/' + $scope.cars._id, $scope.cars).success(function (response) {
                console.log(response);
                refreshCar();
              })
            }


var refreshCab = function () {
            $http.get('/cb/cb').success(function (response) {
              console.log('READ IS SUCCESSFUL');
                $scope.cabslist = response;
                $scope.cabs = "";
            });
        };

        refreshCab();

        $scope.addCab = function () {
            console.log($scope.cabs);
            $http.post('/cb/cb', $scope.cabs).success(function (response) {
                console.log(response);
                console.log("CREATE IS SUCCESSFUL");
                refreshCab();
            });
        };



        $scope.removeCab = function (id) {
            console.log(id);
            $http.delete('/cb/cb/' + id._id).success(function (response) {
                console.log(response);
                console.log('DELETED SUCCESSFULLY');
                refreshCab();
            });
        };

        $scope.editCab = function (id) {
             $http.get('/cb/cb/' + id._id).success(function (response) {
                $scope.cabs = response[0];
            });
        };

        $scope.updateCab = function () {
            console.log("REACHED UPDATE");
            console.log($scope.cabs._id);
            $http.put('/cb/cb/' + $scope.cabs._id, $scope.cabs).success(function (response) {
                console.log(response);
                refreshCab();
              })
            }




            var refreshDriver = function () {
                  $http.get('/d/d').success(function (response) {
                    console.log('READ IS SUCCESSFUL');
                      $scope.driverslist = response;
                      $scope.drivers = "";
                  });
              };

              refreshDriver();

              $scope.addDriver = function () {
                  console.log($scope.drivers);
                  $http.post('/d/d', $scope.drivers).success(function (response) {
                      console.log(response);
                      console.log("CREATE IS SUCCESSFUL");
                      refreshDriver();
                  });
              };

              $scope.removeDriver = function (id) {
                  console.log(id);
                  $http.delete('/d/d/' + id._id).success(function (response) {
                      console.log(response);
                      console.log('DELETED SUCCESSFULLY');
                      refreshDriver();
                  });
              };

              $scope.editDriver = function (id) {
                   $http.get('/d/d/' + id._id).success(function (response) {
                      $scope.drivers = response[0];
                  });
              };

              $scope.updateDriver = function () {
                  console.log("REACHED UPDATE");
                  console.log($scope.drivers._id);
                  $http.put('/d/d/' + $scope.drivers._id, $scope.drivers).success(function (response) {
                      console.log(response);
                      refreshDriver();
                    })
                  }


//   var refreshConfirm= function () {
//         $http.get('/cnfm/cnfm').success(function (response) {
//             console.log('cab Book READ IS SUCCESSFUL');
//             $scope.cndetaillist = response;
//             $scope.cndetail = "";
//         });
//     };

//     refreshConfirm();
// $scope.VieBook=function(){
//   $scope.dateBooked=document.getElementById(dateB).value;
// }


};
