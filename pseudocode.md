Create function that randomly returns either "Rock" "Paper" or "Scissors" as an output
function getComputerChoice() {
    *code for random move selection*
}

Return "Rock" "Paper" or "Scissors" and store output in variable 
let computerSelection = (function output)

Desired output = "Rock" or "Paper" or "Scissors" by random choice

Output as string values for three conditions

Math.random function required. Generate a 1, 2, or 3 at random.
function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(4);
    return Math.floor(Math.random() * (max - min) + min);
}

Store return integer in variable
let randomInt = getRandomInt();

Correlate that value with the string values using a function
function getComputerChoice() {
    if (randomInt === 1) {
        return "Rock"
    } else if (randomInt === 2) {
        return "Paper"
    } else if (randomInt === 3) {
        return "Scissors"
    } else {
        return "Something wrong here.."
    }
}

Store that value in a variable by calling the function
let computerSelection = getComputerChoice();



Write a function that plays a single round of rock paper scissors.

Function accepts two parameters: playerSelection and computerSelection
    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toUpperCase() === computerSelection) {
            return "It's a draw!"
        } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "PAPER") {
            return "You lose! Paper beats rock"
        } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "SCISSORS") {
            return "You win! Rock beats scissors"
        } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "SCISSORS") {
            return "You lose! Scissors beats paper"
        } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "ROCK") {
            return "You win! Paper beats rock"
        } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "ROCK") {
            return "You lose! Rock beats scissors"
        } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "PAPER") {
            return "You win! Scissors beats paper"
        } else {
            return "Something wrong here.."
        }
    }

playerSelection must be case-insensitive; use toUpperCase method
computerSelection must also be upper case for comparisons; change return values to uppercase
    return playerSelection.toUpperCase() === "ROCK"; 


Function should Return a string that declares the winner and the result of the round
i.e "You lose! Paper beats Rock". 

To test: Set constant variable value of playerSelection to "rock"
    const playerSelection = "rock";

then use console log
    console.log(playRound(playerSelection, computerSelection));



Possibilities:
ROCK: "It's a draw!", "You lose! PAPER beats rock", "You win! Rock beats SCISSORS"
PAPER: "It's a draw!", "You lose! SCISSORS beats paper", "You win! Paper beats ROCK"
SCISSORS: "It's a draw!", "You lose! ROCK beats scissors". "You win! Scissors beats PAPER"



Create new function called game(). Include playRound function withis this function.
function game() {
    let randomInt = getRandomInt();
    let computerSelection = getComputerChoice();
    let playerWin = 0;
    let computerWin = 0;

    getRandomInt();
    getComputerChoice();
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    keepScore();

    getRandomInt();
    getComputerChoice();
    playerSelection = prompt("Rock, Paper, or Scissors?");
    roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    keepScore();

    getRandomInt();
    getComputerChoice();
    playerSelection = prompt("Rock, Paper, or Scissors?");
    roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    keepScore();

    getRandomInt();
    getComputerChoice();
    playerSelection = prompt("Rock, Paper, or Scissors?");
    roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    keepScore();

    getRandomInt();
    getComputerChoice();
    playerSelection = prompt("Rock, Paper, or Scissors?");
    roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    keepScore();

    console.log(finalResult());
}

This function's purpose is to play 5 rounds of the playRound function

Get input from user using prompt()
    let playerSelection = prompt("Rock, Paper, or Scissors?");

Use console.log() to display the result of each round 

    Need playRound to return its value to the console.log() at the end of each round

Use console.log() to display end game winner and final tally.
Store playRound() value in a variable:
    let roundResult = playRound(playerSelection, computerSelection);

    Need a game counter to keep track of the score.
        Declare variables playerWin & computerWin, each with an initial value of 0.
        Increment each value by 1 each time their corresponding playRound value is equal to a win.
            if (roundResult === "It's a draw!") {
                ++playerWin;
                ++computerWin;
            } else if (roundResult === "You win! Rock beats scissors" || "You win! Paper beats rock" || "You win! Scissors beats paper") {
                ++playerWin;
            } else if (roundResult === "You lose! Paper beats rock" || "You lose! Scissors beats paper" || "You lose! Rock beats scissors") {
                ++computerWin;
            }
    
    Create a function to use less than, greater than or equals to comparison to determine the end winner after all 5 rounds have been played
        function finalResult() {
            if (playerWin === computerWin) {
                return `It's a draw!! ${playerWin} - ${computerWin}`
            } else if (playerWin > computerWin) {
                return `You win!! ${playerWin} - ${computerWin}`
            } else if (playerWin < computerWin) {
                return `You lose!! ${playerWin} - ${computerWin}`
            }
        }