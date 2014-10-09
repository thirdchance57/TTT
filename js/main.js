var app = angular.module('myApp', []);


app.controller('myController', function ($scope) {
//   $scope.instructors = 
//   [{name: "Alex"},{name:"Lorin"},{name:"Alfonso"},{name:"Sam"},
//   {name:"Meredith"},{name:"Zach"}, {name:"Grant"}];

  $scope.changeColor = function () {
  };

  $scope.down = function () {
    $scope.animation = "next";
  };

})

var winningNumbers = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2,]] ;
var oddNumbers = [] ;
var evenNumbers = [] ;
var counter = 0 ;

function add() {
  counter += 1 ;
}
function recorder() {
  if (counter % 2 === 0) {

  }
  else {

  }
}
function checker() {
  if (oddNumbers || evenNumbers === winningNumbers) {
    console.log("game over")
  }
}