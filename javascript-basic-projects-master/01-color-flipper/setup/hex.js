const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const showTextColor = document.getElementById('color');
const buttonTrigger = document.getElementById('btn');
const getHTMLBody = document.querySelector('body')

buttonTrigger.addEventListener('click', () => {
    const index  = '#';
    for(let i=0; i<6; i++){
        index+= hex[getRandomNumber()];
    }
    showTextColor.innerHTML = index;
    getHTMLBody.style.backgroundColor = index;

})


const getRandomNumber=()=>{
    return Math.floor(Math.random()*hex.length);
}