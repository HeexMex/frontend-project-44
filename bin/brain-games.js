console.log('Welcome to the Brain Games!')
import name from '../src/cli.js';
import main from '../bin/brain-even.js';
import calc from './brain-calc.js'

    

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


let l = 0;
while (l <= 2) {
    if (calc()) {
        l += 1;
        if (l === 3) {
            console.log(`Congratulations, ${name}!`);
            l = 4
        }
    } else {
        l = 4;
    }
}


