console.log("main.js linked") ; //js conneciton tester


var app = angular.module('MyApp', ["firebase"]);
app.controller("TTTmyController", function ($scope, $firebase) {

  $scope.remoteGameContainer = $firebase(new Firebase("https://ttt-ez.firebaseIO.com/databaseGameContainer"));
  
  $scope.toggle = false ;
 
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


  // This container object is what gets synced:
  $scope.gameContainer = {
    boxesArray: $scope.boxes,
    toggleSwitch: $scope.toggle,

  };

  // Everywhere else in your program, use $scope.gameContainer.cellListArray instead of cellList.
  // Everywhere else in your program, use $scope.gameContainer.clickCounter instead of clickCount.
  // Make that change in your ng-repeat as well and anywhere in your index.html as needed.


  // remoteGameContainer: that is the name you gave the Firebase collection (looks like a folder in Firebase).
  // The bind statement creates a connection between anything in your app and the Firebase connection we just created.
   
  $scope.remoteGameContainer.$bind($scope, "gameContainer") ;

 // The bind statement will automatically update your model, in this case cellList, whenever it 
  // changes on Firebase.  But this will not trigger an Angular update of the interface (index.html)
  // - we've been relying on the ng-click to wake up Angular and get the gameboard refreshed.
  // So we put a watch on cellList - this tells Angular to refresh the interface elements, ie ng-class,
  // whenever the model, in this case celList, changes.
  $scope.$watch('gameContainer', function() {
    console.log('gameContainer changed!') ;
  }) ;

  $scope.playerPic1 = [];// selected players icon
  $scope.playerPic2 = [];

  $scope.playerLog1 = []; // player 1 choices
  $scope.playerLog2 = []; // player 2 choices

  $scope.pictures = [
    {photos: 'images/picX.png', picLable: "X"},
    {photos: 'images/richard.jpg', picLable: "R"},
    {photos: 'images/zach.jpg', picLable: "Z"},
    {photos: 'images/lorin.jpg', picLable: "L"},
    {photos: 'images/alfonzo.png', picLable: "F"},
    {photos: 'images/grant.png', picLable: "G"},
    {photos: 'images/meredith.jpeg', picLable: "M"},
    {photos: 'images/alex.png', picLable: "A"},
      {photos: 'images/picO.png', picLable: "O"}
  ]; //end of possible images selections

 $scope.toggleCustom = function() {
    $scope.gameContainer.toggleSwitch = $scope.gameContainer.toggleSwitch === false ? true: false;
    console.log($scope.gameContainer.toggleSwitch);
  }; //end of toggle switch

  $scope.chooseProfessor = true;//ng-show var for "choose your pro text"

  $scope.playerSelect = function(thisPic) {
    if ($scope.playerPic1.length === 0 || $scope.playerPic2.length === 0) {
      if ($scope.gameContainer.toggleSwitch === false ) {
        $scope.playerPic1.push(thisPic.picLable);
        $scope.toggleCustom();//runs toggle switch while its a number
      }

      else {
        $scope.playerPic2.push(thisPic.picLable);
        $scope.chooseProfessor = false;
        $scope.toggleCustom();//runs toggle switch while its a number
      }
    }
  };

  $scope.logClick = function(thisCell) {// start of logging player 1 selections
    if (typeof thisCell.number == "number" && $scope.playerPic2.length === 1) {
      if ($scope.gameContainer.toggleSwitch === false) {//beginning of player 1 logic
        $scope.playerLog1.push(thisCell.number);
        console.log(thisCell.number);
        console.log($scope.playerLog1);
        thisCell.number = $scope.playerPic1[0];
        $scope.winningFunction($scope.playerLog1);
        $scope.toggleCustom();
      }//  end of logging player 1 selections

      else {//   beginning of player 2 logs
        $scope.playerLog2.push(thisCell.number);
        console.log(thisCell.number);
        console.log($scope.playerLog2);
        thisCell.number = $scope.playerPic2[0];
        $scope.winningFunction($scope.playerLog2);
        $scope.toggleCustom();//  end of logging player 2 selections
      }
    }
  };//   end of click log function 

  $scope.winningFunction = function(moves) {
    var winningArrays = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ]; // end of possible winning combos winningArrays

    for(var i = 0; i < winningArrays.length; ++i) {//loops through the 8 arrays
      var howManyMatches = 0;
      var thisWinner = winningArrays[i];
      for (var j = 0; j < thisWinner.length; j++) {// loops through each number of each array
        for (var m = 0; m < moves.length; m++) {// loops through the players moves thusfar
          if (moves[m] == thisWinner[j]) {// if player moves matches with a win condition, we run the counter
            console.log("Match - ", thisWinner, moves[m]);
            howManyMatches++;
            break;
          }
        }
      }
      if(howManyMatches == 3) {// does the total matches reach 3?
        if ($scope.gameContainer.toggleSwitch === false) {
          $scope.callWinner1();
        }
        else {
          $scope.callWinner2();
        }
      }
    }
  };//end of winningFunction for loop

    $scope.xxShow = false;
    $scope.ooShow = false;
    $scope.richShow = false;
    $scope.zacShow = false;
    $scope.loriShow = false;
    $scope.alfoShow = false;
    $scope.granShow = false;
    $scope.alexShow = false;
    $scope.meriShow = false;


  /////////// anounces who the winner of player 1 ///////////////
  $scope.callWinner1 = function() {
    switch($scope.playerPic1[0]) {
      case "X":
        console.log("X WINS!!!!!!!!!!!!!");
        $scope.chat1 = document.getElementsByClassName("chat").innerHTML = "X WINS";
        $scope.xxShow = true;
        break;
      case "O":
        console.log($scope.playerPic1);
        $scope.chat1 = document.getElementsByClassName("chat").innerHTML = "O WINS";
        $scope.ooShow = true;
        break;
      case "R":
        console.log($scope.playerPic1);
        $scope.chat1 = document.getElementsByClassName("chat").innerHTML = "RICHARD WINS You know Steve Jobes";
        $scope.richShow = true;
        break;
      case "Z":
        console.log($scope.playerPic1);
        $scope.chat1 = document.getElementsByClassName("chat").innerHTML = "ZACH WINS Yeah Buddy";
        $scope.zacShow = true;
        break;
      case "L":
        console.log($scope.playerPic1);
        $scope.chat1 = document.getElementsByClassName("chat").innerHTML = "LORIN WINS !!!!!!!NICE";
        $scope.loriShow = true;
        break;
      case "F":
        console.log($scope.playerPic1);
        $scope.chat1 = document.getElementsByClassName("chat").innerHTML = "ALFONSO WINS Groovy Sauce";
        $scope.alfoShow = true;
        break;
      case "G":
        console.log($scope.playerPic1);
        $scope.chat1 = document.getElementsByClassName("chat").innerHTML = "GRANT WINS Test your code noobs";
        $scope.granShow = true;
        break;
      case "A":
        console.log($scope.playerPic1);
        $scope.chat1 = document.getElementsByClassName("chat").innerHTML = "ALEX WINS Eat your Garlic";
        $scope.alexShow = true;
        break;
      case "M":
        console.log($scope.playerPic1);
        $scope.chat1 = document.getElementsByClassName("chat").innerHTML = "MEREDITH WINS Yay for kitties";
        $scope.meriShow = true;
        break;
      default :
        console.log("default case switch");
    }
  };//end of call winner player 1 function


  /////////// anounces who the winner of player 2 ///////////////
  $scope.callWinner2 = function() {
    switch($scope.playerPic2[0]) {
      case "X":
        console.log("X WINS!!!!!!!!!!!!!");
        $scope.chat1 = document.getElementsByClassName("chat").innerHTML = "X WINS";
        $scope.xxShow = true;
        break;
      case "O":
        console.log($scope.playerPic2);
        $scope.chat1 = document.getElementsByClassName("chat").innerHTML = "O WINS";
        $scope.ooShow = true;
        break;
      case "R":
        console.log($scope.playerPic2);
        $scope.chat1 = document.getElementsByClassName("chat").innerHTML = "RICHARD WINS You know Steve Jobes";
        $scope.richShow = true;
        break;
      case "Z":
        console.log($scope.playerPic2);
        $scope.chat1 = document.getElementsByClassName("chat").innerHTML = "ZACH WINS Yeah Buddy";
        $scope.zacShow = true;
        break;
      case "L":
        console.log($scope.playerPic2);
        $scope.chat1 = document.getElementsByClassName("chat").innerHTML = "LORIN WINS !!!!!!!NICE";
        $scope.loriShow = true;
        break;
      case "F":
        console.log($scope.playerPic2);
        $scope.chat1 = document.getElementsByClassName("chat").innerHTML = "ALFONSO WINS Groovy Sauce";
        $scope.alfoShow = true;
        break;
      case "G":
        console.log($scope.playerPic2);
        $scope.chat1 = document.getElementsByClassName("chat").innerHTML = "GRANT WINS Test your code noobs";
        $scope.granShow = true;
        break;
      case "A":
        console.log($scope.playerPic2);
        $scope.chat1 = document.getElementsByClassName("chat").innerHTML = "ALEX WINS Eat your Garlic";
        $scope.alexShow = true;
        break;
      case "M":
        console.log($scope.playerPic2);
        $scope.chat1 = document.getElementsByClassName("chat").innerHTML = "MEREDITH WINS Yay for kitties";
        $scope.meriShow = true;
        break;
      default :
        console.log("default case switch");
    }
  }; //end of call winner player 2 function
}); //end of app.controller 

