// for(let i = 1; i<=20; i++){
//     console.log(`${i}. Hatsune Miku`);
// }
// for(let i=5;i<=100;i+=5){
//     console.log(`Number of :${i}`)
// }

// const mySkill = ["C++", "C#", "Python", "Javascript"];
// const len = mySkill.length;
// console.log(len)

// for(let i = 0 ; i<len;i++){
//     console.log(`My programming language is ${i+1}. ${mySkill[i]}`);
// }


// const ages = [20, 24, 17, 15, 30, 24, 18, 15, 27, 37];
// const len = ages.length;
// let teen = 0;
// let adult = 0;

// for(let i = 0; i<len; i++){
//     ages[i]<=18 ? teen++ : teen+=0;
    // if(ages[i]<=18){
    //     teen++;
    // }
    // else if(ages[i]>18){
    //     adult ++;
        // }
        // else{
    //     return 0
    // }
//     ages[i]>18? adult++ : adult+=0;
// }

// console.log(`The number of teens : ${teen}`);
// console.log(`The number of adult: ${adult}`);

// limit to play for each day
const limit =2;
//The hours playing for each day
const hoursPlaying = [2, 2, 3, 3, 1, 4 ,5];
// using manual
const total = hoursPlaying[0] + hoursPlaying[1] + hoursPlaying[2] + hoursPlaying[3] + hoursPlaying[4] + hoursPlaying[5] + hoursPlaying[6];
// this the temporary variable to store the total of hours playing
console.log(`manual : The total playing hours : ${total} hour`)
let totalTime = 0;
//this is the temporart variable to stote the number of time limit.
let exceedTime = 0;
const len  = hoursPlaying.length;

for(let i =0 ; i<len; i++){
    totalTime += hoursPlaying[i];
    hoursPlaying[i]>limit?exceedTime++: exceedTime+=0;
}

console.log(`For loop :Total hours playing : ${totalTime} hours`)
console.log(`The exceed time : ${exceedTime} hours`)