// console.log("hello"+'world')
const name = "toshika "
const repocount = 100
console.log(name + repocount+ " on 100");

const gameName = new String('toshika')
console.log(gameName[0]); // to access value on a single index 
console.log(gameName.__proto__); // prototype 

console.log(gameName.toUpperCase()); // 
console.log(gameName.charAt(3));

const newString = gameName.substring(0,3);
console.log(newString);
const anotherString = gameName.slice(0,4)


const newName = "         toshika  "
console.log(newName);
console.log(newName.trim());

const url = "https://toshikagoswami%20gmail.com"
console.log(url.replace('%20',' '))




