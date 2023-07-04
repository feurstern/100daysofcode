const { stdin, stdout } = require('process');
const readline = require('readline');

const r = readline.createInterface({
    input : stdin,
    output : stdout
})

const rAge = readline.createInterface({
    input: stdin,
    output : stdout
})

let username = '';
let userAge = 0;

// ask the username
r.question("Enter your name", (string)=>{
    username =  string;
    console.log(`The username : ${username}`);

    r.close();
})

rAge.question('How old you are ', (age)=>{
    userAge = age;
    rAge.close();
})


// console.log(`The user age : ${userAge}`);
