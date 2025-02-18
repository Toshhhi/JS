// objects to declare 1. as literal 2. as constructor 
// singleton(one fo a kind) : if made from constructor 

// Object.create =>  constr. method 

// object literals


const jsuser = {
    name: "toshika",// key = name & value = toshika; both can be accessed 
    "full name" : "toshika goswami",
    age: 18,
    location: "delhi",
    gmail: "toshikagmail.con",
    isLoggedIn: false,
    lastLoginDays:["monday", "sunday"]
}

// console.log(jsuser.gmail); //1 way to access the obj 
// console.log(jsuser[gmail]); // this will give error because it is kept in string dt so 
//console.log(jsuser["gmail"]); // 2 nd way ; this is a better way because dot "." cannot access the keys that are stored in " " so to access eevry possible key this way is used 
// console.log(jsuser["full name"]); // this way you can also access the ones which are written in " "

// const mySym = Symbol("key1") //to decalre a symbol by using symbol keyword
// to use symbol as a key of an object ; we cannot just directly add it as a key in the object cause then it will return string as a datatype and not as a symbol 
// to use it correctly as a key 
// const objectnew= {
//     [mySym]: "newkey"
// }
// console.log(objectnew[mySym]); // to access symbol 

// // to change values
// jsuser.gmail= "hitesh.google.com"

// to make sure that nobody can change the values further 
// Object.freeze(jsuser)


// functions can be treated as variables in js
jsuser.greeting = function(){
    console.log("hellooooo");
}

// // to refer/call a method/function
// console.log(jsuser.greeting()); 

jsuser.greeting2 = function(){ // to refer to the same object as "this" to ${} such as ${this.propertyname}
console.log(`hello js users , ${this["full name"]}, is here to teach you tonight!!`); // here we called the property of the object we have made before by using 
}

console.log(jsuser.greeting2());

// note : mostly the values are acceseed by using "." dot but there are cases when these cannot be used so we rather use "[]" to access some values 



