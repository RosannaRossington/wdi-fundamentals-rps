'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

var playerMove = prompt();
var getPlayerMove = function(playerMove){
 // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (playerMove == "paper") {
        return "paper";
    }
    if (playerMove == "scissors") {
        return "scissors";
    }
    if (playerMove == "rock") {
        return "rock";
    }
   return "getInput()";
};

var computerMove = randomPlay();
var getComputerMove = function(computerMove) {
   if (computerMove == "paper") {
        return "paper";
    }
    if (computerMove == "scissors") {
        return "scissors";
    }
    if (computerMove == "rock") {
        return "rock";
    }
    return "randomPlay()";

}
var getWinner = function(playerMove, computerMove) 
{ 
    // This function should either give us back 'player', 'computer', or 'tie'.
    // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
    // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.
    
if ( computerMove == playerMove)
    { console.log ("tie");
} else if (computerMove == "rock"){
    if (playerMove == "scissors"){
        console.log ("computer wins");
    } else if (playerMove == "paper"){
        console.log ("player wins");
    }
} else if (computerMove == "scissors"){
    if (playerMove == "paper") {
        console.log ("computer wins");
    } else if ( playerMove == 'rock'){
    console.log ("player wins");
} 
} else if (computerMove == 'paper'){
    if (playerMove == 'scissors') {
    console.log ("player wins");
    } else if (playerMove =="rock") {
        console.log ("computer wins");
    }
}
};

getWinner();

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    
    for (var round=0;round<((playerWins < 5) || (computerWins<5));round+=1) { if (getWinner == "player wins") {
        return playerWins +=1;
    }
    else if (getWinner == "computer wins") {
    return computerWins +=1;
    }
     
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}


playToFive();
