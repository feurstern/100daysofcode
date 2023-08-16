const toggleButton = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', ()=>{
    console.log(sidebar.classList)
    sidebar.classList.contains('show-sidebar') ? sidebar.classList.remove('show-sidebar') : sidebar.classList.add('show-sidebar');

    //another way
    sidebar.classList.toggle('show-sidebar')
})