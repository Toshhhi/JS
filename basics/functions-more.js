function addNumbers(...num1){ //"..." is k/a rest operator , it converts the number of values passed into an array 
    return num1;
} 
//*** if (val1, val2, ...num1) hota toh shuru ki do values print hoti or baaki values num1 ki array me chali jaati 

console.log(addNumbers(2,7,9))


//TO PASS AN OBJECT IN A FUNCTION 
const user ={
    name: "toshika",
    age : "12"
}
function handleobj(anyobject){
    console.log(`username is ${anyobject.name} and age is ${anyobject.age}`);
}
handleobj(user) // output : username is toshika and age is 12


//TO PASS AN ARRAY IN A FUNCTION 
const mynewarr = [2,3,4,5,6]
function handlearray(getArray){
    return getArray[2]
}
// console.log(handlearray(mynewarr));
console.log(handlearray([200,200,300,500]));

