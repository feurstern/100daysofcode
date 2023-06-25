let getRandomNumber = Math.floor(Math.random() * 100);


console.log(` you got ${getRandomNumber}`)
getRandomNumber <10 ? console.log("lower than 10")
:getRandomNumber > 10 ? console.log("higher than 10")
: getRandomNumber > 35 ? console.log("higher than 35")
: getRandomNumber > 55 ? console.log("higher than 55")
: getRandomNumber >=100 ? console.log("higher or equal to 100") : console.log("Higher than 101");

let foreignLangauge = "Jf"

switch (foreignLangauge) {
    case "JP":
        console.log("Konnichiwa!")
        
        break;

    default:
        console.log("hiii")
        break;
}