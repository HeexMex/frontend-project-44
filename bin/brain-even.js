import { defineConfig } from "eslint/config";

export default function getRandomInt(max) {
    const number = Math.floor(Math.random() * 99 + 1);
let correctAnswer;
if (number % 2 === 0) {
    correctAnswer = 'yes'
} else {
    correctAnswer = 'no'
}
return [number, correctAnswer]
}
    // let number = getRandomInt(99);



// export { number, correctAnswer }