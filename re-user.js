const { stdin, stdout } = require('process');
const readline = require('readline');

const r1 = readline.createInterface({
    input : stdin,
    output : stdout
})

let userAnswer = '';

r1.question("What's the most memorable experience that you never forget?", (answ)=>{
    userAnswer = answ;
    console.log(`The user response is : ${userAnswer}`)
    r1.close();
})

