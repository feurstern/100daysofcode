const convert = (...args) => {
    let arr = [...args];
    let biner = '';
    arr.forEach((num, index) => {
       console.log(`The data : ${num}`);
        for(let i = 0;  i<= arr.length; i++){
            num%2 === 1 ? biner+='1' : biner+="0"
        }
        return biner;
    })
}

 console.log(convert(2, 3, 4, 5));
