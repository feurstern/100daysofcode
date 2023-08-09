// two way of using function for button
// you have to get the button element by using id , class or, the element
const btnJob = document.getElementById('btn-work');
const btnAge = document.getElementById('btn-age');

// get the id or the class for rerender
var showAge = document.getElementById('age');
var showJob = document.getElementById('job');
const showResult = document.getElementById('result')
let number = 0;

const increase = () => {
    number++;
    showResult.textContent = number;
}

const decrease = () =>{
    number --;
    showResult.textContent = number;
}

console.log(`btn job value : ${btnJob}`);

// first way
    const clicked = () => {
        alert('Hiiii, you just click the button');
        alert('Have a nice day!')
    }

//second way

btnJob.addEventListener('click', function () {
    showJob.textContent = "Programmer";
})


btnAge.addEventListener('click', function(){
    showAge.textContent = "17 years old";
})

function buttonShowAge() {
    showAge.textContent = '17 Years old'
}

