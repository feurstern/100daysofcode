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
        name: 'Sakura Miyawaki',
        job: 'web designer',
        img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'Keqing',
        job: 'intern',
        img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'Dasha Taran',
        job: 'the boss',
        img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const len = hex.length - 1;
const hexSpace = 6;

// select the content of the item 
const  img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const getHTMLBody = document.querySelector('body');


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const colourBtn = document.querySelector('.colour-btn');

// set staring time
let index = 0;

//load intial item
window.addEventListener('DOMContentLoaded', () => {
    changeData();

});


colourBtn.addEventListener('click', ()=>{
    let index1 = '#';

    for (let i =0; i<hexSpace;i++ ){
        index += hex[getRandomNumber()];
    }

    getHTMLBody.style.backgroundColor = index1;
})



const getRandomNumber = ()=>{
    return Math.floor(Math.random() * len);
}

const changeData = () => {
    const item = reviews[index];
    img.src = item.img;
    job.textContent = item.job;
    author.textContent = item.name;
    info.textContent = item.text;

}

prevBtn.addEventListener('click', ()=>{
    index--;
    index < reviews.length -1 ? index=0 : 0
    changeData();
    console.log(`The prev btn ${index}`)
})

nextBtn.addEventListener('click', ()=>{
    index++;
    index  > reviews.length -1  ? index=0 : 0
    changeData();
    console.log(`The next btn ${index}`)
})

randomBtn.addEventListener('click', ()=>{
    index = Math.floor(Math.random() * reviews.length -1);
    changeData();
    console.log(`The random-btn ${index}`) 
})
