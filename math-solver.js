// we want to find the are and the circumferences of the square
function square(sides){
    //find the area of square
    const area = sides * sides //4 if put argument 2
    const circumferences = 4 * sides  //8

    console.log(`The area of square is ${area}`);
    console.log(`The circumference of square is ${circumferences} `)

}

function rectangle(width, length){
    const area = length * width; // 4, 5 -> 20
    const circumferences = 2 *(length + width); //18
    console.log(`The area of rectangle is ${area}`);
    console.log(`The circumference of rectangle is ${circumferences}`); 
}

const circle =(radius)=>{
    // The value of Math.PI is equal to 3.14
    const area = Math.PI * radius * radius;
    const circumferences = 2 * Math.PI * radius;
    console.log('If you use Math round:')
    console.log(`The area of the circle is ${Math.round(area)}`);
    console.log('If  you do not use Math round:')
    console.log(`The area of the circle is ${area}`);
    console.log(`The circumferences of the circle is ${Math.round(circumferences)}`)
}


function triangle(base, height){
    const area = (height * base)/2;
    
}

circle(9);
// rectangle(4,5)
// square(2);
// square(9);
// // console.log(Math.PI)
