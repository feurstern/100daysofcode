// const readLine = require('readline');
'use strict'
let userChoice = ''
const showUsername = document.querySelector('.username');
const showPassword = document.querySelector('.password');
// console.log(typeof (userChoice))
const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);
const adjectives = [
    'ugly', 'bad', 'evil', 'kind', 'nazi', 'sweeet', 'generous', 'honest', 'charm', 'light']
const nouns = ['retire', 'annoucement', 'chair', 'door', 'table', 'here', 'there', 'dormer', 'strainer', 'pouch']
const symbols = ["*", "(", ",", "$", "@", "=", "-", ".", "<", ">", "}"];
let username = '';
let password = '';

function generateRandomNumber() {

}
while (userChoice!== 1) {
    userChoice = parseInt(prompt('Press 1 for generate random username or press 2 for generate random password :'))
    console.log(userChoice);
    generate(userChoice, randomNumber)
}

function generate(choice, randomNum) {

    if (choice == 1) {
        return username = adjectives[randomNum] + nouns[randomNum];
    }
    else if (choice == 2) {
        return password = adjectives[randomNum].toUpperCase() + nouns[randomNum] + randomNum + symbols[randomNum];
    }
    else{
        return 0;
    }


}


// to rerender the page
showUsername.textContent  = username;
showPassword.textContent = password;
// console.log(newUsername)