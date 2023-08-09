// dom
const showCounter = document.getElementById('counter');
let total = 0;

///
const increment = () => {
    total += 1;
    //  alert('clicked')
    console.log(`The numbe : ${total}`)
    showCounter.textContent = total
    
    total > 0 ? showCounter.style.color = 'skyblue' : 0;
    total < 0 ? showCounter.style.color = 'red' : 0;

}

const decrement = () => {
    total--;
    console.log(`The numbe : ${total}`)
    showCounter.textContent = total
    // alert('clicked')
    total > 0 ? showCounter.style.color = 'skyblue' : 0;
    total < 0 ? showCounter.style.color = 'red' : 0;

}



/// addevenntlistener onclikc