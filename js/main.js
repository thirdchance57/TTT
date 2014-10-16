console.log("main.js linked") ; //js conneciton tester


var app = angular.module('MyApp', []);
  
// app.directive('ourRating', function () {
//   return {
//     template: '<ul class="rating">' +
//                 '<li ng-repeat="star in stars" class="filled">' +
//                     '\u2605' +
//                 '</li>' +
//               '</ul>',

//     restrict: 'A',
//     scope: {
//       ratingValue: '='
//     },
//     link: function (scope, elem, attrs) {
//       console.log(scope.ratingValue, scope, elem, attrs);
//       scope.stars = [];
//       for (var i = 0; i < scope.ratingValue; i++) {
//         scope.stars.push({});
//       }
//     }
//   };
// });//end of directive

app.controller("myController", function ($scope) {
// var promise = $http.get("https://api.github.com/repos/lorint/AndrewIG/issues");
//   promise.success(function(data){
//     $scope.issues = data;
//   });
  
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

  $scope.playerLog1 = []; // player 1 choices
  $scope.playerLog2 = []; // player 2 choices

  $scope.playerPic1 = [];
  $scope.playerPic2 = [];

  $scope.pictures = [
    {photos: 'images/picX.png', picLable: "X"},
    {photos: 'images/picO.jpeg', picLable: "O"},
    {photos: 'images/picO.jpeg', picLable: "B"}
  ]; //end of possible images selections

  $scope.playerSelect = function(thisPic) {
    while(true) {
      $scope.toggleCustom();//runs toggle switch while its a number
      if ($scope.toggle === true ) {
        $scope.playerPic1.push(thisPic.picLable);
        console.log("player 1 selected ");
        console.log($scope.playerPic1);

      }
      else {
        $scope.playerPic2.push(thisPic.picLable);
        console.log("player 2 selected ");
        console.log($scope.playerPic2);
      }
    break;
    }
  };


  $scope.toggle = false ;
  $scope.toggleCustom = function() {
    $scope.toggle = $scope.toggle === false ? true: false;
    console.log($scope.toggle);
  }; //end of toggle switch

  $scope.logClick = function(thisCell) {
    if (typeof thisCell.number == "number") {
      $scope.toggleCustom();//runs toggle switch while its a number

      if ($scope.toggle === true) {//beginning of player 1 logic
        $scope.playerLog1.push(thisCell.number);
        console.log(thisCell.number);
        console.log($scope.playerLog1);
        thisCell.number = $scope.playerPic1[0];
        $scope.winningFunction($scope.playerLog1);
      }//  end of logging player 1 selections

      else {//   beginning of player 2 logic
        $scope.playerLog2.push(thisCell.number);
        console.log(thisCell.number);
        console.log($scope.playerLog2);
        thisCell.number = $scope.playerPic2[0];
        $scope.winningFunction($scope.playerLog2);
//  end of logging player 2 selections
      }
    }
  };//   end of click log function 

  $scope.winningFunction = function(moves) {
    var winningArrays = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
      ]; // end of possible winning combos winningArrays
    for(var i = 0; i < winningArrays.length; ++i) {
      var howManyMatches = 0;
      var thisWinner = winningArrays[i];
      for (var j = 0; j < thisWinner.length; j++) {
        for (var m = 0; m < moves.length; m++) {
          if (moves[m] == thisWinner[j]) {
            console.log("Match - ", thisWinner, moves[m]);
            howManyMatches++;
            break;
          }
        }
      }
      if(howManyMatches == 3) {
        console.log("win!!!!!!!!!!!!");
      }
    }
  };

  $scope.callWinner1 = function() {
    console.log("Winnng Combo 1") ;
  };//end of call winner player 1 function
  
  // winningFunction($scope.playerLog2);

}); //end of controller 

