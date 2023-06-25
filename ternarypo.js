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


selectedOperator =="+"?  console.log(`${number1} + ${number2} = ${number1 + number2}`)
: selectedOperator == "-" ? console.log(`${number1} - ${number2} = ${number1 - number2}`)
: selectedOperator == "*"? console.log(`${number1} * ${number2} = ${number1 * number2}`)
: selectedOperator == "/"? console.log(`${number1} / ${number2} = ${number1 / number2}`) : console.log("error")