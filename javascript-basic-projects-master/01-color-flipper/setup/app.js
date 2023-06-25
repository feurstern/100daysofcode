const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const getHTMLBody = document.querySelector('body');
const buttonTriggered = document.getElementById("btn");
const color = document.getElementById("color")


buttonTriggered.addEventListener('click', ()=>{
    const selectedColour = getRandomNumber();
    console.log(selectedColour);
    getHTMLBody.style.backgroundColor = colors[selectedColour];
    color.textContent = colors[selectedColour]
})

const getRandomNumber=()=>{
    return Math.floor(Math.random()*3)
}