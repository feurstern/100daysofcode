const keyword = "hatsune";
let tryLogin = 0;
let userInput = "";

while(tryLogin<=5){
    userInput=prompt("Enter your name");
    tryLogin++
        
}

console.log(`The number of login :${tryLogin}`);
if(userInput=keyword){
    document.write("<h1>Welcome the page</h1>")
}

