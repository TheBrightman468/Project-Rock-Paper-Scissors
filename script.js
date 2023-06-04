function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(4);
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    if (randomInt === 1) {
        return "ROCK"
    } else if (randomInt === 2) {
        return "PAPER"
    } else if (randomInt === 3) {
        return "SCISSORS"
    } else {
        return "Something wrong here.."
    }
}

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

function keepScore() { 
    if (roundResult === "It's a draw!") {
        ++playerWin;
        ++computerWin;
    } else if (roundResult === "You win! Rock beats scissors" || roundResult === "You win! Paper beats rock" || roundResult === "You win! Scissors beats paper") {
        ++playerWin;
    } else if (roundResult === "You lose! Paper beats rock" || roundResult === "You lose! Scissors beats paper" || roundResult === "You lose! Rock beats scissors") {
        ++computerWin;
    }
}

function finalResult() {
    if (playerWin === computerWin) {
        return `It's a draw!! ${playerWin} - ${computerWin}`
    } else if (playerWin > computerWin) {
        return `You win!! ${playerWin} - ${computerWin}`
    } else if (playerWin < computerWin) {
        return `You lose!! ${playerWin} - ${computerWin}`
    }
}