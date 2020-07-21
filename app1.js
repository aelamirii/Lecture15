(function () {
'use strict'

angular.module('CounterApp' , [] )
.controller('CounterController' , CounterController );

CounterController.$inject = ['$scope', '$timeout'];

function CounterController($scope, $timeout) {

  $scope.counter = 0;


  $scope.upCounter = function () {
    // $scope.counter++;
    // console.log("Counter Incremented !");

    $timeout(function () {
          $scope.counter++;
          console.log("Counter Incremented !");
    }, 2000);



    // setTimeout(function () {
    //
    //   $scope.$apply(function () {
    //     $scope.counter++;
    //     console.log("Counter Incremented !");
    //   });
    // } , 2000);


    // setTimeout(function () {
    //
    //   $scope.counter++;
    //   console.log("Counter Incremented !");
    //   $scope.$digest();
    // } , 2000);


  };

}

})();
