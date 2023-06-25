const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const buttonTrigger = document.getElementById('btn');
const getHTMLBody = document.querySelector('body');

const showHexColorValue  = document.getElementById('color')

buttonTrigger.addEventListener('click', ()=>{
  let hexColor = '#'
  for(let i = 0 ; i<6; i++){
    const index = getRandomNumber();
    hexColor += hex[index];
  }
  getHTMLBody.style.backgroundColor = hexColor;
  showHexColorValue.textContent = hexColor
})


const getRandomNumber=()=>{
  return Math.floor(Math.random()* hex.length);
}