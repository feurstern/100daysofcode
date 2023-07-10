const a = 10;
const b = 15;
const c = 20;
const average = 3
//expression
const d = (a + b + c) / average;

const t = [2, 3, 4, 5, 10, 11, 100]

const pl = ['Javascript', "C++", "Python", "Lua", "Java", "Go", "PHP"]
const len = pl.length - 1;
const randomNumber = Math.floor(Math.random() * len);

console.log(`The favourite programming language is ${pl[randomNumber]}`);
if (pl[randomNumber] === "Javascript") {
    console.log('We got Javascript')
    d++
}
else if (pl[randomNumber] === "C++") {
    console.log('We got c++')
}
else if (pl[randomNumber] === "Lua") {
    console.log('We got Lua');
}
else {
    console.log('You got another programming language');
}
console.log(`The second value of array is ${t[1]}`)

for(let i = 0; i<=len; i++){
    console.log(`The programming language is ${pl[i]}`)
}
// comapare the value of variable a to another var
// if (a > b || a > c) {
//     console.log(`The variable of a is higher than var b and var c`)
// }
// else {
//     console.log('The variable of a less than')
// }