let operator  = prompt("Enter the math operator  * / + - ")
let value1 = parseFloat(prompt('Enter the value :'));
let value2 = parseFloat(prompt('Enter the value 2'));

const showTextResult = document.getElementById('result');
console.log(showTextResult);
let result = 0;

operator ===  '*' ?  result = value1 * value2 : 0
operator ===  '/' ?  result = value1 / value2 : 0
operator ===  '-' ?  result = value1 - value2 : 0
operator ===  '+' ?  result = value1 + value2 : 0



alert(`The result of ${value1} ${operator} ${value2} = ${result}`);
showTextResult.textContent = result;