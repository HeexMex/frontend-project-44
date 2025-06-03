import readlineSync from 'readline-sync';
import brainEven from './brain-even.js';
import brainCalc from './brain-calc.js';
console.log('Welcome to the Brain Games!')

let startAnswer = readlineSync.question('Choosi game: ').toLowerCase().trim()

if (startAnswer == 'brain-even') {
    brainEven()
} if (startAnswer == 'brain-calc') {
    brainCalc()
} if (startAnswer == 'brain-gcd') {
    brainGcd()
}
    



