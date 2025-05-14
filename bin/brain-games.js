#!/usr/bin/env node 
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!')
let name = readlineSync.question('May I have your name?')
    console.log('Hello,', name+'!') 

function main() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    function getRandomInt(max) {
        return Math.floor(Math.random() * max + 1);
        }
        let number = getRandomInt(99)
    console.log('Question:'+ number)
    const answer = readlineSync.question('Your answer: ').toLowerCase().trim()
    
    let correctAnswer;
    if (number % 2 === 0) {
        correctAnswer = 'yes'
    } else {
        correctAnswer = 'no'
    }
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
    } else {
        i = 4;
    }
}