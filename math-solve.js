//create a function
// to find an area and square

const square=(sides)=>{
    // find the area of rectangle
    const area = sides * sides;
    const circumference = 4 * sides;

    console.log(`The are of the square is ${area}`)
    console.log(`The circumference of the square is ${circumference}`);
}

// square(5);
// square(2.4);

// console.log(`The math pi value ${Math.PI}`);
const circle =(radius)=>{

    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI  * radius;

    console.log(`The are of the circle is ${Math.round(area)}`)
    console.log(`The circumference of the cirlce is ${circumference}`);
    return;
}

const getRandomNumber=()=>{
    return Math.floor(Math.random() * 10);
}

// getRandomNumber();
// console.log(`We got random number : ${getRandomNumber()}`);

// circle(9);

// converter program
