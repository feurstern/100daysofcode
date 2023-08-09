// question list
const questionList = [
    'What country has the longest coastline in the world?',
    'By size, what is the smallest country in the world?',
    'Which country has a unicorn as its national animal?',
    'Which country is home to the world’s tallest building?',
    'Officially, what is the coldest country in the world?'    
]

const answerList = ['canada', 'vatican city', 'scotland', 'arab', 'russia'];
let score = 0;
let i = 0;
let live = 3
const len = questionList.length - 1;
const showScore = document.getElementById('score')

//implement looping while do do while or for
do{
    // we have to store the temporary answer from thej player
    let playerAnswer = prompt(questionList[i]);
    // temp answer key from the array
    let answerKey = answerList[i];
    //iteration
    i++;    
    // check if the player answer correctly 
    playerAnswer == answerKey ? score+=20 : live-=1
    
   
}// the condition that script will stop looping
while(i<=len);

alert(`Your score is ${score}`)
showScore.textContent = score;