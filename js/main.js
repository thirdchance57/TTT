console.log("main.js linked") ; //js conneciton tester

var app = angular.module('myApp', []);

app.controller("myController", function ($scope) {
  
  $scope.boxes = [
    {number: "0"}, 
    {number: "1"}, 
    {number: "2"}, 
    {number: "3"}, 
    {number: "4"}, 
    {number: "5"}, 
    {number: "6"}, 
    {number: "7"}, 
    {number: "8"}, 
    ]; //end of boxes array

  $scope.images = [
    { "src": "../images/picX.png"},
    { "src": "../images/picO.png"}
    ]; //end of images array

  $scope.toggle = true ;
  $scope.toggleCustom = function() {
    $scope.toggle = $scope.toggle === false ? true: false;
    console.log($scope.toggle);
  }; //end of toggle function

  



}) ; //end of controller
