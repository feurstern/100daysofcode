const hoursPlaying = [
    2, 2, 3 ,3, 1 ,4, 5
];

const totalHoursPLaying = 0;
const exceedTImeLimits = 0;

for(let i=0; i<=hoursPlaying.length; i++){
    totalHoursPLaying+= hoursPlaying[i];
    if(hoursPlaying[i]>2){
        exceedTImeLimits+=1;
    }
    else{
        return 0;
    }
}

console.log(`Total hours playing : ${totalHoursPlaying}`);
console.log(`The exceed time list : ${exceedTimeLimits}`);