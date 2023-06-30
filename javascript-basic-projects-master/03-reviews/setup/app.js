// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Hatsune Miku',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3, 
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const getJob = document.getElementById('job');
const img = document.getElementById('person-img');
const getAuthor = document.getElementById("author");
const getInfo = document.getElementById('info')

const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const randomButton = document.querySelector('.randonm-btn');

let index  = 1;

window.addEventListener("DOMContentLoaded", ()=>{
  showPerson(index);
  
})

const showPerson=(person)=>{
  const item = reviews[index];
  img.src = item.img;
  getJob.textContent = item.job;
  getAuthor.textContent= item.name;
  getInfo.textContent= item.text
}
//hosw neext person
nextButton.addEventListener('click', ()=>{
  index++;
  showPerson(index);
  index>3? index =0 : 0
  console.log(index)
})

// shuw previous person
prevButton.addEventListener('click', ()=>{
  index--;
  showPerson(index);
  index<0? index =0 : 0
  console.log(index)
})