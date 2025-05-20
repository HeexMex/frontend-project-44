console.log('Welcome to the Brain Games!')
import name from '../src/cli.js';
import main from '../bin/brain-even.js'

    

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


