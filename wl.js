// for(let i=1; i<3; i++){
//     console.log(`Flag ${i}`);
//     for (let j=0; j<4; j++){
//         console.log(`Map ${j}`)
//     }
// }


// for (let i = 1; i<3; i++){
//     console.log(`Platform  :${i}`);
//     for (let j = 0 ; j<2; j++){
//         console.log(`Carrot : ${j+1}`)
//     }
// }

// going rounded
for(let i =1; i<=3; i++){
    // we want to take the flag
    console.log(`Running for ${i} lap`)
    for(let j=1; j<=4;j++){
        console.log(`Take the flag of ${j}`)
    }
}

for (let a=1; a<=3; a++){
    console.log(`The platfrom ${a} created.`)
    for (let k=1; k<=2; k++){
        console.log(`Carrot ${k} created.`)
    }
}

let a = 0
const colour = ["red", "green", "blue", "black", "white"]
let len = colour.length -1;

while(len>=0){
    console.log(`The name of colour : ${colour[len]}`)
    len--;
}

let i = 0;

// while (a<=10) {
//     console.log(`The number : ${a}`);
//     a++
    
// }

let b= 0;
do{
    console.log(`Test ${b}`)
    b++;
}while(b<=10)