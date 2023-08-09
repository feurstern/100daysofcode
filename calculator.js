const mathOperator = prompt("Choose math operator  * + / -");
const value1 = parseInt(prompt("Ente the first value :"));
const value2 = parseInt(prompt("Enter the second value :"));
const showTextResult = document.getElementById('total');

// temp variable 
let result = 0;
// console.log(typeof(value1));

if (!isNaN(value1) && !isNaN(value2)) {
    // condition true
    if (mathOperator == '+') {
        result = value1 + value2;
    }
    else if (mathOperator == '-') {
        result = value1 - value2;
    }
    else if (mathOperator == '*') {
        result = value1 * value2;
    }
    else if (mathOperator == '/') {
        result = value1 / value2;
    }
    else{
        alert('You just input the wrong math operator!')
    }
}
else {
    //condition false if the user just enter not a number
    alert(`You input the wrong command!`)
}

alert(`The result ${value1} ${mathOperator} ${value2} = ${result}`);
showTextResult.textContent = result