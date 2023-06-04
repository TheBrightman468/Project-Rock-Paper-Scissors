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