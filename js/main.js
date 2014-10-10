console.log("working") ;

var app = angular.module('myApp', []);

app.controller("myController", function ($scope) {
  $scope.boxes = [
    {status: "X"}, {status: "X"}, {status: "X"}, 
    {status: "X"}, {status: "X"}, {status: "X"}, 
    {status: "X"}, {status: "X"}, {status: "X"}, ] ;
}) ;