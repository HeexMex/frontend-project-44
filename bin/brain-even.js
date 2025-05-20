import { defineConfig } from "eslint/config";

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
    }
    let number = getRandomInt(99);

let correctAnswer;
if (number % 2 === 0) {
    correctAnswer = 'yes'
} else {
    correctAnswer = 'no'
}


export { number, correctAnswer }