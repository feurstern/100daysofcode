// switch
const pl = ['Javascript', "C++", "Python", "Lua", "Java", "Go", "PHP"]
const len = pl.length - 1;
const randomNumber = Math.floor(Math.random() * len);

switch(pl[randomNumber]){
    case "Javascript":
       console.log('We got Javascript')
       d++
    break;

    case "C++":
        console.log('We got C++')
    break;

    case "Lua" :
        console.log('We got Lua')
    break;

    case "Python" :
        console.log('You got Python')
    break;

    default:
        console.log('You got different language')
}