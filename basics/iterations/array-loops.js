
const arr = [1,2,3,4,5];

//for of loop 
// for (const num of arr) { //takes care of the length by itself unlike java, cpp 
//     console.log(num);
// }

// const greeting = "hello i love you "
// for (const word of greeting) {
// console.log(`each char is ${word}`);
// }

//Maps : object that holds key value pairs, remembers the order of the keys with no duplicate values
const map = new Map()
map.set('Raj' , "Jaipur" )
map.set('Maharashtra' , "Mumbai")
map.set('Bihar' , "Patna")
// console.log(map);
 
//loops on map 
// for (const i of map) {
    // console.log(i);
// output: [ 'Raj', 'Jaipur' ]
// [ 'Maharashtra', 'Mumbai' ]
// [ 'Bihar', 'Patna' ]

// for (const [i] of map) {
    // console.log(i);
 //output :Raj
// Maharashtra
// Bihar

// for (const [i] of map) {}
    // console.log(i);}
// } // output : Raj Jaipur
// Maharashtra Mumbai
// Bihar Patna

const myObj = {
    game1 : 'gta',
    game2 : 'laracroft'
}

// for (const [i] of myObj) { 
//     console.log(i); //error : myObj is not iterable
// } 

for (const key in myObj) {
    console.log(key); //game1 game2
}

for (const key in myObj) {
    console.log(myObj[key]); //gta laracroft
}
