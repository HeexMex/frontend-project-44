import readlineSync from 'readline-sync';
let name = readlineSync.question('May I have your name?')
console.log('Hello,', name+'!') 


const Rand = () => {
    let kol = Math.floor(Math.random() * 99 + 1)
    return kol
}

export {name, Rand}