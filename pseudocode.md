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



Write a function that plays a single round of rock paper scissors

Function accepts two parameters: playerSelection and computerSelection

playerSelection must be case-insensitive

Function should Return a string that declares the winner and the result of the round
i.e "You lose! Paper beats Rock". 

