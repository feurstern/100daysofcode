const stack =()=>{
    this,count = 0;
    this.storage = {

    }
    this.push = (value)=>{
        this.storage[count] = value;
        count++;
    }
}