// nested loop
// we have another loop inside loop

// for (let i=1; i<=12; i++){
//     console.log(`The number of hour: ${i}`)
//     for (let a = 1; a<=12; a++){
//         console.log(`The number of minutes from number: ${a}`)
//         for(let z=0; z<=2; z++){
//             console.log(`The number of z : ${z}`);

//         }
//     }
// }

// second case of running the field

// we have to circle 3 times of the field
// for(let i=1; i<=3; i++){
//     console.log(`The number of lap : ${i}`)

//     // during we run on the circle we have to take 4 flags.
//     for(let j=1; j<=4; j++){
//         console.log(`The number of flags that being taken : ${j}`)
//     }
// }

// while loop

// make iteration of number start from 0 to 10 using whilee
let a = 0;
while (a<=100) {
    console.log(`The number a :${a}`);
    a++;
}

// do while
let b = 1
do{
    console.log(`the number of b: ${b}`)
    b++;
}while(b<=50)


// I want to print for each value of array by using while.
const randNumber = [23, 5, 1, 2, 5, 6, 34, 34, 23, 44, 41, 4, 1299, 2393043];
// starting value, because we want to print, then we have to access the index, and the index is started from 0
let i =0;

// condition variable when the program will stop looping until it reachs all of the value of the array.
const len = randNumber.length -1;

while(i<=len){
   console.log(`The data array of index ${i}= : ${randNumber[i]}`);
   i++;
}
