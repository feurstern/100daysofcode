let counter = 0;
const btns = document.querySelectorAll('.btn');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const showtextValue = document.getElementById('value');
const len = hex.length - 1;
const getHTMLBody = document.querySelector('body');


btns.forEach((btn) => {
    console.log(`The value of btn ${btn}`);
    btn.addEventListener('click', (e) => {
        let style = e.currentTarget.classList;
        console.log(`The value of style var : ${style}`)

        style.contains('decrease') ? counter-- : 0
        style.contains('increase') ? counter++ : 0
        style.contains('reset') ? counter = 0 : 0
        style.contains('multiply') ? counter *= 2 : 0
        style.contains('divide') ? counter /= 2 : 0

        if (style.contains('colour')) {
            let newHexColour = '#'
            for (let i = 0; i < 6; i++) {
                newHexColour += hex[getRandomNumber()]
            }

            getHTMLBody.style.backgroundColor = newHexColour;
        }

        counter > 0 ? showtextValue.style.color = 'greem' : 0;
        counter < 0 ? showtextValue.style.color = 'red' : 0;
        counter == 0 ? showtextValue.style.color = 'skyblue' : 0;


        showtextValue.textContent = counter;


    })
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * len);
}