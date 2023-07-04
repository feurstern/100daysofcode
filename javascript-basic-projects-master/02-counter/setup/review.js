let counter = 0;
const showTextValue = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    console.log(btn);
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget.value);
        const style = e.currentTarget.classList;

        style.contains('decrease') ?counter--
        :style.contains('increase')? counter++
        :style.contains('reset') ? counter = 0
        : style.contain('multiply') ? counter *=2
        : style.contains('divide') ? counter /=2 :0

        counter>0 ? showTextValue.style.color ="green" : 0
        counter<0 ? showTextValue.style.color = "red" : 0
        counter === 0 ? showTextValue.style.color = "skyblue" : 0

        // if (style.contains('decrease')) {
        //     counter--;
        // }
        // else if (style.contains('increase')) {
        //     counter++;
        // }
        // else if (style.contains('reset')) {
        //     counter = 0;
        // }
        // else if (style.contains('multiply')) {
        //     counter *=2;
        // }
        // else if(style.contains('divide')){
        //     counter/=2;
        // }
        // else if(style.contains('exponent')){
        //     counter %= 2;
        // }
        // else {
        //     return 0;
        // // }
        // if (counter < 0) {
        //     showTextValue.style.color = "red"

        // }
        // if (counter > 0) {
        //     showTextValue.style.color = "green"
        // }
        // if (counter=== 0){
        //     showTextValue.style.color ="skyblue"
        // }

        showTextValue.textContent = counter;
    })
})


