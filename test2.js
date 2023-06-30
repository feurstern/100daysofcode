const hoursPlaying = [2, 2, 3, 3, 4, 1,5]
const len = hoursPlaying.length;

let t = 0;
let e = 0;

for (let i=0; i<len;i++){
     t+= hoursPlaying[i];
    //  console.log(`Total hours playing : ${t}`);
     hoursPlaying[i]>2 ? e+=1 : e+=0;
    //  console.log(`The exceed time : ${e}`)
}

console.log(`Total hours playing  : ${t}`)
console.log(`Total time exceed : ${e}`);

for(let i=1; i<=20; i++){
    console.log(`${i}. Hatsune Miku`)
}
for(let i=5; i<=100; i+=5){
    console.log(`${i}`)
}