const person={
    name : 'miku',
    age : 23,
    nationality : "Japan",
    bloodType : 'B',
    displayCar : (e)=>{
        console.log('This is ', this.name);
        // console.log('Nationality', e.currentTarget.nationality)
        person.myArrowFunction = ()=> {console.log(this.nationality)};
    }
}


const {name:nm, age:ag, nationality: nt, bloodType: bt, displayCar: dc} = person
console.log(person['age']);
console.log(nm, ag);
dc();

const block ={
    width : 25,
    height : 24
}

const {width : w, height : h} = block
const volume =(weight, height)=>{
     return weight * height
}

console.log(volume(w,h));