// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const btnTrigger = document.querySelector('.modal-btn');
const mdOverlay = document.querySelector('.modal-overlay');
const clsBtn = document.querySelector('.close-btn');
console.log(btnTrigger, mdOverlay, clsBtn);

btnTrigger.addEventListener('click', ()=>{
    mdOverlay.classList.add('open-modal')
    // alert('clikc')
})

clsBtn.addEventListener('click', ()=>{
    mdOverlay.classList.remove('open-modal')
    // alert('clicked!')
})