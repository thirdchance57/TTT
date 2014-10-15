var winningFunction = function(moves) {
  // Go through all 8 possible wining moves
  for (var j = 0; j < $scope.possibleWinner.length; j++) {
    // For each one of these, we'll count up as we go if we find matches.  3 in a row means a win!
    var howManyMatches = 0;

    // The actual 3-member array of a winning condition
    var thisWinner = $scope.possibleWinner[j];
    // Go through this damned condition, all 3 numbers
    for(var k = 0; k<thisWinner.length; k++) {
      // Cycle through all the X moves thusfar
      for (var i = 0; i < moves.length; i++) {
        // If this xMove matches with a win condition square number, then we'll count another in the mix
        if(moves[i] == thisWinner[k])
        {
          //console.log("Match - ", thisWinner, moves[i]);
          howManyMatches++;
          // Since we matched here, we won't match any others, so might as well bail.
          break;
        }
      }
    }
    // Did we get 3 total matches in the testing above?
    if(howManyMatches == 3) 
    {
      // Holy shit, yes we did!  We have a winner.
      if (($scope.movecounter % 2) == 1) 
      {
        $scope.render = "X Has Won!"
      }

      else
      {
       $scope.render = "O Has Won!"
      };

    }

  }
  console.log($scope.movecounter, $scope.render);
 if ($scope.movecounter == 9 && $scope.render == "" ||
  $scope.movecounter == 8 && $scope.render == "" )
 {
  
  $scope.render = "it's a tie";
 }

};


