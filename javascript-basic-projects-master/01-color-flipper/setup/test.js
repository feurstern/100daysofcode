const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const buttonTriggered = document.getElementById('btn');
const color = document.getElementById('color');
const getHTMLBody = document.querySelector('body');
// alert('test')
console.log(buttonTriggered);

buttonTriggered.addEventListener("click", ()=>{
    let hexColor  = "#";

    for(let i=0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }
    getHTMLBody.style.backgroundColor = hexColor;
    color.textContent= hexColor;
})

const getRandomNumber=()=>{
    return Math.floor(Math.random()*hex.length)
}