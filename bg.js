const getHTMLBody = document.querySelector("body");

const colour= ['red', 'blue', "black", "yellow", "green", "skyblue"]
let i =0;

const getRandomNumber =()=>{
    return Math.floor(Math.random()* colour.length -1);
}
const cb =()=>{
    getHTMLBody.style.backgroundColor= colour[getRandomNumber()];
    console.log(`randoom number :${getRandomNumber()}`)
    alert('clicked!')
}