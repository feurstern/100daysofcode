// const getRandomNumber = Math.floor(Math.random() * 20 + );
// console.log(getRandomNumber);

// const languagePreferences = 'JP'
// 
// switch(languagePreferences){
    // case 'DE':
        // console.log("German");
    // break;
// 
    // case "JP": 
    // console.log("Japanese")
    // break;
    // 
    // default:
        // console.log("error");
// }

//rarety of the game items
const rarerity = [
    "normal",
    "normal",
    "normal",
    "normal",
    "normal",
    "rare",
    "rare",
    "ultra rare"
]
//implement math
console.log(rarerity.length);
const index = Math.floor(Math.random() * rarerity.length);
console.log(index);

// implement switch
switch(index){
    case 0:
        console.log("You got normal item");
    break;

    case 1:
        console.log("You got normal item");
    break;
    
    case 2:
        console.log("You got normal item");
    break;
    
    case 3:
        console.log("You got normal item");
    break;

    case 4:
        console.log("You got normal item");
    break;

    case 5:
        console.log("You got rare item");
    break;

    case 6:
        console.log("You got rare item");
    break;

    case 7:
        console.log("You got ultra rare item");
    break;

    default:
        console.log("error");
}

