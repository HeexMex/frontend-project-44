import { defineConfig } from "eslint/config";
import name from '../src/cli.js';
import readlineSync from 'readline-sync';

    export default function main() {
        console.log('Answer "yes" if the number is even, otherwise answer "no".')
        const number = Math.floor(Math.random() * 99 + 1);
        console.log('Question:'+ number)
        const answer = readlineSync.question('Your answer: ').toLowerCase().trim()
        let correctAnswer = number % 2 === 0 ? 'yes' : 'no';
        if (number % 2 === 0) {
        correctAnswer = 'yes'
        } else {
        correctAnswer = 'no'
        }
        if (answer === correctAnswer) {
            console.log('Correct!');
            return true;
        } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`)
        return false;
        }
    }