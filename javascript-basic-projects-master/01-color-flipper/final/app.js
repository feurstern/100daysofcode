const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const buttonTrigger = document.getElementById('btn');
const showBackgroundColor = document.getElementById('color')
const getHTMLBody = document.querySelector('body');

buttonTrigger.addEventListener('click', ()=>{
  let index = getRandomNumber();
  getHTMLBody.style.backgroundColor= colors[index];
  showBackgroundColor.textContent = colors[index];

})


const getRandomNumber=()=>{
  return Math.floor(Math.random()* colors.length);
}