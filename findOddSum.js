function getSumOfArry(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(element, element, sum);
    }
    return sum;
}
// const myNumbers = [22, 32, 37, 40, 55];
// getSumOfArry(myNumbers);

// get odd number
function getOddAnArry(number){
    const oddNumber = [];
    for(let i = 0; i <number.length; i++){
        const index = i;
        const element = number[index];
        if(element % 2 !== 0){
            console.log(index, element)
            oddNumber.push(element);
        }
    }
    return oddNumber;
}

myNumbers = [22, 32, 37, 40, 55];
const oddNumbers = getOddAnArry(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfArry(oddNumbers);
console.log(oddNumberSum);
