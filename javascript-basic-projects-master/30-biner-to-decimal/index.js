
const convertBtn = document.getElementById('calc');
const showResult = document.getElementById('result');
// console.log('Input value :', getInputValue);
let result = 0;
let tempArray = [];
let digiNumber = 2;

convertBtn.addEventListener("click", ()=>{
    const getInputValue = document.getElementById('number').value
    let arrConvert = num => Number(num);
    let newArrr = Array.from(String(getInputValue), arrConvert);
    const len = newArrr.length -1;
    
    console.log('new arr :', newArrr);
    console.log(`New array lenght : ${len}`);

    for(let i = 0 ; i<=len; i++){
        result += newArrr[i]  * digiNumber**i;         
    }
    // console.log("re :", digiNumber**3)

    showResult.textContent = result;

})


// let myFn = num =>Number(num);

// let arrayConvert = Array.from(String(getInputValue),ar)