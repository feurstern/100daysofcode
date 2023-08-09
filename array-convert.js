let t = 1652;

const convert= num => Number(num);

const newArray = Array.from(String(t), convert);

const len = newArray.length;
  let total = 0;

for(let i = 0; i<=len -1; i++){
    total+= newArray[i] ** len;
    console.log(`${i+1}. The value of the array ${newArray[i]}`)
};

console.log(`The result is ${total}`);

