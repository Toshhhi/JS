const score =  700 
console.log(typeof score); //js has automatically decided that the datatype of score here is number 

const balance = new Number(300) // to expilicitly define the datatype here in this case is Number 
console.log(balance); 
// in this case you can also avail diff properties available for the particular datatype ; Below is an example: 
console.log(balance.toString().length); // here the number is converted to a string and by doing so it can also avail the properties/funtions of a string 
console.log(balance.toFixed(6)); // precision/approximation according to the number given (after the decimal)

const number = 456.7865
console.log(number.toPrecision(5)); // in this case the number is approximated to the given index and the range for index should be between 1 to 21 (starting from the first digit) ; is some cases where only some rigit preciion value is given h







