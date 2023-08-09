// create color array for generate randomly 
const colour = ['green', 'skyblue', 'blue', 'orange', 'purple', 'red', 'yellow', 'gray', 'brown', 'lightblue']
const showTextColour = document.getElementById('colour');
const button = document.getElementById('btn-colour');
const getHTMLBody = document.querySelector('body');
const len = colour.length - 1;
const showAboutMe = document.getElementById('about');
const showWork = document.getElementById('work')
// console.log(`showtext value : ${showTextColour}`);
// console.log(`The value of buttonm : ${button}`);
// console.log(`GetHTMLBOdy value : ${getHTMLBody}`)

//apply some implementantion addEventListener
button.addEventListener('click', ()=>{
    // to store temporary value from generate random
    let index = generateRandomNumber();
    getHTMLBody.style.backgroundColor = colour[index];
    showTextColour.textContent = colour[index];
    showAboutMe.style.color = "red";
})


//function to generate random number.
const generateRandomNumber = () => {
    return Math.floor(Math.random() * len)
}

//show information about me
const aboutMe = () => {
    showAboutMe.innerHTML = "<h2> I am hatsune Miku </h2>"
}

const work =()=>{
    showWork.innerHTML ="<h2> I am game developer and frontend developer</h2>"
}