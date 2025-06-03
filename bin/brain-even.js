import { defineConfig } from "eslint/config";
import * as Op from '../src/cli.js';
import readlineSync from 'readline-sync';

    const main = () => {
        console.log('Answer "yes" if the number is even, otherwise answer "no".')
        const number = Op.Rand();
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
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${Op.name}!`)
        return false;
        }
    }
    export default () => {
        for (let i = 0; i < 3; i++) {
            const result = main()
            if (result === false) {
                return false;
            }
        }
        console.log("Congratulations, " + Op.name + "!");
}
