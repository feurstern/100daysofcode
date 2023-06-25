let value =0
const getIdCounter = document.getElementById('counter');

const counter = ()=>{
    value+=2;
    getIdCounter.textContent = value;
}
console.log(value);
