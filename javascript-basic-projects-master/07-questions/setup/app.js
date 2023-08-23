//using selectors inside the element
const buttons = document.querySelectorAll('.question');

buttons.forEach(btn=> btn.addEventListener('click', (e)=>{
    // we have to take the main parent element of the button
    let toggleClass = e.currentTarget.parentElement.parentElement;
    toggleClass.classList.toggle('show-text');
}))