//using selectors inside the element
const buttons = document.querySelectorAll('.question');

buttons.forEach(btn=> btn.addEventListener('click',(e)=>{
    let showText = e.currentTarget.parentElement;
    console.log("parent element", e.currentTarget.parentElement);
    console.log(showText)
    showText.classList.toggle('show-text')
}))