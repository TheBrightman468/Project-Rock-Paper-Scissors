function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(4);
    return Math.floor(Math.random() * (max - min) + min);
}
let randomInt = getRandomInt();

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
let computerChoice = getComputerChoice();