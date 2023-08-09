// create constan variable for the username and the password
// imagine this real database 
const username = "hatsune"
const password = "123ba"
// take userInput for the username and the password while login
let usernameInput = "";
let passwordInput = "";

// check the auth, if the username and the password are wrong, the user can't login to the page
while(username != usernameInput && password!= passwordInput){
    // we want to re login using the prompt
    usernameInput = prompt("Enter the username :");
    passwordInput = prompt("Enter the password :")
}
// if both username and the password are true
document.write(`<h1>Welcome to the page ${username}</h1>`)