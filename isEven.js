function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }

}
const myNumberIsEven = isEven(333);
console.log(myNumberIsEven);