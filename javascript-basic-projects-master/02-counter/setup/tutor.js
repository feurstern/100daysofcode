let count = 0;
const showTextValue = document.getElementById('value');
const allBtn = document.querySelectorAll('.btn');

allBtn.forEach((btn) => {
    console.log(`The loop button : ${btn}`);
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')){
            count --;
            showTextValue.textContent = count;
        }
        else if(styles.contains('increase')){
            count ++;
            showTextValue.textContent = count;
        }
        else if(styles.contains('reset')){
            count = 0;
            showTextValue.textContent= count
        }
        else{
            return 0;
        }

    })

})