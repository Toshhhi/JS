//REDUCE METHOD:

const nums = [ 1,2,3,4]
const sumInitial = nums.reduce(function (acc, curr){
    console.log(`value of accumulator : ${acc} and current value is : ${curr}`);
    return acc + curr;
}, 3)
console.log(sumInitial);

const total = nums.reduce((acc, curr)=> acc + curr, 0) // same using arrow function 
