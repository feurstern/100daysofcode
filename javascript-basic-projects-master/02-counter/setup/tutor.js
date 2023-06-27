//set initial value 
let count = 0;
//get the id of value 
const showTextValue = document.getElementById('value');
// get the generic value of the all btn id
const allBtn = document.querySelectorAll('.btn');

// becaue it returrn array wne need to sperate tgen  by using foreach
allBtn.forEach((btn) => {
    console.log(`The loop button : ${btn}`);
    // we  use addeventlistening for each button
    btn.addEventListener('click', (e) => {
        // we set tge name of class into variable
        const styles = e.currentTarget.classList;
        //becuse wh have so many types of button so we have to use function contain to get the specififc class
        if(styles.contains('decrease')){
            count --;
        }
        else if(styles.contains('increase')){
            count ++;
        }
        else if(styles.contains('reset')){
            count = 0;
        }
        else if(styles.contains('multiply')){
            count *= 2;
        }
        else{
            return 0;
        }

        if(count>0){
            showTextValue.style.color = "green";
            // alert('too low')
        }
       if(count<0){
        showTextValue.style.color = "red";
        // alert(' too high')
       }
       showTextValue.textContent = count;
    })

})