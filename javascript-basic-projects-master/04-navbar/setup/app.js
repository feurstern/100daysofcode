// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const navToggle= document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click',()=>{
    // console.log(links.classList.contains('random'))
    let e =links.classList

    e.contains('show-links') ? e.remove('show-links'): e.add('show-links')
    
    e.toggle('show-links')
})