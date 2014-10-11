console.log("main.js linked") ; //js conneciton tester

var app = angular.module('myApp', []);

app.controller("myController", function ($scope) {
  
  $scope.boxes = [
    {number: 0}, 
    {number: 1}, 
    {number: 2}, 
    {number: 3}, 
    {number: 4}, 
    {number: 5}, 
    {number: 6}, 
    {number: 7}, 
    {number: 8}, 
    ]; //end of boxes array
  $scope.winningArrays = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
  ]; // end of possible winning combos winningArrays

  $scope.playerLog1 = []; // player 1 choices
  $scope.playerLog2 = []; // player 2 choices

  $scope.images = [
    { "src": "../images/picX.png"},
    { "src": "../images/picO.png"}
    ]; //end of images array

  $scope.toggle = false ;
  $scope.toggleCustom = function() {
    $scope.toggle = $scope.toggle === false ? true: false;
    console.log($scope.toggle);
  }; //end of toggle 

  $scope.logClick = function(thisCell) {
    if ($scope.toggle === true) {
      $scope.playerLog1.push(thisCell.number);
      console.log(thisCell.number);
      console.log($scope.playerLog1);
    }
    else{
      $scope.playerLog2.push(thisCell.number);
      console.log(thisCell.number);
      console.log($scope.playerLog2);

    }
  };


}) ; //end of controller
