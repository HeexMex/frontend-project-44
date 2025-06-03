import * as Op from '../src/cli.js';
import readlineSync from 'readline-sync';

const gcd = () => {
    console.log('Find the greatest common divisor of given numbers.')
    const gcd = (a, b) => {
        while (b !== 0) {
          const temp = b;
          b = a % b;
          a = temp;
        }
        return a;
      };
    const num1 = Op.Rand
    const num2 = Op.Rand
    const correctAnswer = gcd(num1, num2);

    console.log(`Question: ${num1} ${num2}`);
}