function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(4);
    return Math.floor(Math.random() * (max - min) + min);
}
let randomInt = getRandomInt();