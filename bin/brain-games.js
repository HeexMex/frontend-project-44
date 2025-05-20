#!/usr/bin/env node 
    // import number from './brain-even.js';
    // import correctAnswer from './brain-even.js';
import getRandomInt from './brain-even.js';
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!')
import name from '../src/cli.js';


    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    function main() {
        const [number, correctAnswer] = getRandomInt();
        console.log('Question:'+ number)
        const answer = readlineSync.question('Your answer: ').toLowerCase().trim()
    

        // const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
        if (answer === correctAnswer) {
            console.log('Correct!');
            return true;
        } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`)
        return false;
        }
    }

let i = 0;
while (i <= 2) {
    if (main()) {
        i += 1;
        if (i === 3) {
            console.log(`Congratulations, ${name}!`);
            i = 4
        }
    } else {
        i = 4;
    }
}


