(function () {
'use strict'

angular.module('CounterApp', [])
.controller('CounterController' , CounterController);

CounterController.$inject = ['$scope', '$timeout'];

function CounterController($scope , $timeout) {

  $scope.counter = 0;


  $scope.upCounter = function () {
    // $scope.counter++;
    // console.log("Counter Inremented !");


// 3rd methode: Find angular specific service
// that handles the same functionnality
    $timeout(function () {
      $scope.counter++;
      console.log("Counter Inremented !");
    } , 2000 );


// 2nd methode: Wrap your custom code inside the $apply
    // setTimeout(function () {
    //
    //   $scope.$apply(function () {
    //     $scope.counter++;
    //     console.log("Counter Inremented !");
    //
    //   })
    //
    // } , 2000 );



// 1st methode: Call the $digest after a custom code
    // setTimeout(function () {
    //   $scope.counter++;
    //   console.log("Counter Inremented !");
    //   $scope.$digest();
    // } , 2000);


  };


}


})();
