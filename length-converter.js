const showResult = document.getElementById('result');
const getInputValue = document.querySelector('input').value

const km_to_cm = () => {
    const result = getInputValue * 10000;
    showResult.textContent = result;
    alert('clicked')
}

const km_to_m = ()=>{
    const result =getInputValue * 100;
    showResult.textContent = result;
    alert('clicked')
}

const km_to_mm=()=>{
    const result = getInputValue * 100000;
    showResult.textContent = result;
    alert('clicked')
}