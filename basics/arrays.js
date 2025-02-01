// // Basics of array 

// const arr = [0,1,2,3,4,5] //  declaring an array ; can have diff types ke elements bhi 
// // single variable me multiple elements rakh sakte hai 
// // when ever copy opt applied on arrays it makes shallow copies(whose properties share the same references) whereas deep copies (no shared ref.)

// // const myhero = ("spiderman" , "superman")
// // const myhero2 = new Array("spiderman" , "superman")// another way of declaring an array 
// // console.log(arr[3]);

// // //Array Methods
// // arr.push(6) // to add element 
// // arr.pop()
// // arr.unshift(79) // add elements at start of the array 
// // arr.shift() // removes the element from the start
// // console.log(arr.includes(7)) // checks if the value is present in the array or not 
// // console.log(arr.indexOf(7)); // if the index does not exist in the array that will return -1 in answer 
// // const newarr = arr.join() // changes the type of the array to string and combine all the elements in it. 
// // console.log(arr);
// // console.log(newarr); 

// //slice, splice 
// console.log("A" , arr); // array before slice 
// const arr2 = arr.slice(1,3) // slice does not return the range vale and does not manipulate original array 
// console.log(arr2); // sliced array
// console.log("c " , arr); // og array after slice 


// console.log("B" , arr); // array before splice 
// const arr3 =arr.splice(1,3) // splice does return the range value as well as also manipulates the original array 
// console.log(arr3); // spliced array 
// console.log("d ", arr); //og array after splice 




// **********************Array part 2*********************************

//MERGING 2 ARRAYS
const veg = ["potato", "tomato", "brinjal"]
const fruits = ["apple", "mango"]
//veg.push(fruits) // veg array ke ander fruits array ajayegi 
// in order to print a value we will have to address it as 2D array i.e., [1][1] 
//console.log(veg);
const allhero = veg.concat(fruits) // concat returns new array merged 
//console.log(allhero); 

//SPREAD = ... used to spread each element of the array separate 
const spread = [...fruits,...veg] // spreaded each element of the arrays into individual strings and then merged those separate elements together
console.log(spread);

console.log(Array.isArray("toshika")); // to check if this is an array 
console.log(Array.from("toshika")); // to convert in an array 
console.log(Array.from({name:"toshika"})); // if array from an object has to be made, the it must be specified of what should be the array 
// just console.log(Array.from({name:"toshika"})); will give an empty array cause it does not know what to print 


//CONVERSION OF MULTIPLE VARIABLES INTO ARRAY 

let score1 = 100; 
let score2 = 200; 
let score3 = 300; 
console.log(Array.of(score1,score2,score3)); // .of returns a new array from set of elements 



















