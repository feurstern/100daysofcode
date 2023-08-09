const mathOperator = prompt("Enter a math operator :");
const value1 = parseInt(prompt("Enter the value 1 :"));
const value2 = parseInt(prompt("Enter the value 2 :" ));
let result = 0;

if( !isNaN(value1) && !isNaN(value2)){
    if(mathOperator =="+"){
      result = value1 + value2 ;
    }
    else if(mathOperator =="-"){
        result = value1 - value2
    }
    else if(mathOperator =="*"){
        result = value1 * value2
    }
    else if(mathOperator =="/"){
        result = value1 / value2
    }
    else{
        alert(`You have input invalid command!`);
    }
}
else {
    alert(`You have enter invalid number`)
}

console.log(`The result ${value1} ${mathOperator} ${value2} = ${result}`)
alert(`The result ${value1} ${mathOperator} ${value2} = ${result}`);


