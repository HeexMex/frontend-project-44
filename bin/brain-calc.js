import * as Op from "../src/cli.js";
import readlineSync from 'readline-sync'

const calc = () => {
    console. log("What is the result of the expression?");

    const operators = ['+', '-', '*'];
    let num1 = Op.Rand();
    let num2 = Op.Rand();
    const operator = operators[Math.floor(Math.random() * operators.length)];

    console. log(`Question: ${num1} ${operator} ${num2}`)

    let corrAnswer = eval(num1 + operator + num2); 
    let answer = readlineSync.question('Your answer: ')
    console.log (answer)
    if (Number(answer) === corrAnswer) {
        console.log ("Correct!");
        return true
    
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${Op.name}!`)
        return false
    }
};

    export default () => {
        for (let i = 0; i < 3; i++) {
            const result = calc()
            if (result === false) {
                return false;
            }
        }
        console.log("Congratulations, " + Op.name + "!");
}

