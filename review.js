// const a = 2;
// const b = 7

// const userAge = [23, 45 ,23 , 34];
// const len = userAge.length;//4

// a > b && a> len ?console.log("a is higher than and a is higher than len"): console.log("a is less than of both variable")
// a > b || len < b ? console.log("true") : console.log('false');

const programmingLanguages = ["C++", "JavaScript", "C#" ,"Swift", "Python", "PHP"];
const len = programmingLanguages.length -1;

const getRandomNumber=()=>{
    return Math.floor(Math.random() * len );

}
console.log(`My favourite programming language is ${programmingLanguages[getRandomNumber()]}`);