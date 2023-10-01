//using selectors inside the element
// you have to add show-text class.

const btns = document.querySelectorAll('.question');
console.log('btns:', btns)

btns.forEach(btn=> btn.addEventListener('click', (e)=>{
    const showText = e.currentTarget;
    const currentParent = e.currentTarget.parentElement
    console.log('current parent', currentParent)
    console.log('showtext:', showText);
    showText.classList.toggle('show-text')
}))