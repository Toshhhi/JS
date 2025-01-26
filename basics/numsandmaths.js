// const score =  700 
// console.log(typeof score); //js has automatically decided that the datatype of score here is number 

// const balance = new Number(300) // to expilicitly define the datatype here in this case is Number 
// console.log(balance); 
// // in this case you can also avail diff properties available for the particular datatype ; Below is an example: 
// console.log(balance.toString().length); // here the number is converted to a string and by doing so it can also avail the properties/funtions of a string 
// console.log(balance.toFixed(6)); // precision/approximation according to the number given (after the decimal)

// const number = 456.7865
// console.log(number.toPrecision(5)); // in this case the number is approximated to the given index and the range for index should be between 1 to 21 (starting from the first digit) ; is some cases where only some rigit preciion value is given h

// const hundred = 10000000
// console.log(hundred.toLocaleString('en-IN')); // used en-IN for indian std conversion 
// console.log(Number.MAX_VALUE);



// *********************MATHS*************************
// a library that is by default present with js 
// console.log(Math); // give "object" as output and has properties : all the funtions and formulas 
// console.log(Math.abs(-8)); // convert all vals to positive values
// console.log(Math.round(6.78)); // round off karta hai no. ko  
// console.log(Math.random(1,5)); // 
// console.log(Math.ceil(1.5)); // chooses the upper number while rounding off
// console.log(Math.floor(1.5)); // chooses the lower number while rounding off
// console.log(Math.min(6,6,7,8,4,5));
// console.log(Math.max(6,6,7,8,4,5));

console.log(Math.random()); // 0-1 range values it will give 
 

console.log((Math.random()*10)+1);

// can use ceil and floor for upper and lower limits 
const min = 10;
const max = 60;
//console.log(Math.floor(Math.random()*); //using floor to round off to the lower bound 
console.log(Math.floor(Math.random() * (max - min + 1))  - min ); // added one because we dont want 0 // max - min cause of the range to be defined 













