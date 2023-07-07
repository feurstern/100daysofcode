const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const showTextColour = document.getElementById('color');
const getHTMLBody = document.querySelector('body');
const len = hex.length-1;
const hexSpace =6;

btn.addEventListener('click', ()=>{
    let newHexColour ='#';
    for(let i =0; i<hexSpace; i++){
        newHexColour+= hex[getRandomNumber()];
    }
    getHTMLBody.style.backgroundColor = newHexColour;

    showTextColour.textContent = newHexColour;
})

const getRandomNumber =()=>{
    return Math.floor(Math.random() * len);
}