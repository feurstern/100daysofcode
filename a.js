const questionList = [
    'What country has the longest coastline in the world?',
    'By size, what is the smallest country in the world?',
    'Which country has a unicorn as its national animal?',
    'Which country is home to the world’s tallest building?',
    'Officially, what is the coldest country in the world?'
]

const answerList = ['canada', 'vatican city', 'scotland', 'arab', 'russia']

const len = questionList.length -1;
let i =0;
let score = 0;

do{
    let playerAnswer = prompt(questionList[i]);
    let answerKey = answerList[i];
    i++

    playerAnswer ==  answerKey ? score+=20 : score+=0;
}
while(i<=len);

alert(`Your score : ${score}`);