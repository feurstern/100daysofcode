//using selectors inside the element
// you have to add show-text class.

const btns = document.querySelectorAll('.question');

btns.forEach(btn=> btn.addEventListener('click', (e)=>{
    const showText = e.currentTarget;
    console.log('showtext:', showText);
    showText.classList.toggle('show-text')
}))