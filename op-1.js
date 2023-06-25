// const num1 = 10
// const num2 = 4;
// const mathOperator = [
//     '+',
//     '-',
//     '*',
//     '/',
// ]
// const index = Math.floor(Math.random() * 3);
// const selectedOperator = mathOperator[index];
// console.log(`selected operator: ${selectedOperator}`);

// switch (selectedOperator) {
//     case '+':
//         console.log(num1 + num2);
//         break;

//     case '-':
//         console.log(num1 - num2);
//         break;

//     case '*':
//         console.log(num1 * num2);
//         break;

//     case '/':
//         console.log(num1 / num2);
//         break;

//     default:
//         console.log('error');
// }\


const number1= Math.floor(Math.random() * 100);
const number2 = Math.floor(Math.random() * 100);
const mathOperator = [
    '+',
    '-',
    '*',
    '/',
]
const index = Math.floor(Math.random() * 3);
const selectedOperator = mathOperator[index];

switch (selectedOperator){
    case '+':
        console.log(`${number1} + ${number2} = ${number1 + number2}`);
    break;

    case '-':
        console.log(`${number1} - ${number2} = ${number1 - number2}`);
    break;

    case '*':
        console.log(`${number1} * ${number2} = ${number1 * number2}`);
    break;

    case '/':
        console.log(`${number1} / ${number2} = ${number1 / number2}`);
    break;
    default:
        console.log('error');
}
