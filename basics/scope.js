let a = 10;
const b = 20; 
var c = 30; // ispe scope kaam nahi karta 
// three of they work the same until scope is initialised 
// {} = scope
// block scope ek block ke liye use hoga 
// global scope oore code ke liye use hoga 

if (true) {
    let a = 100;
    console.log("inner value :", a);
}
console.log("outter value :" , a);
//output : inner value : 100 outter value : 10

// browser me global scope alag hota hai or code env me alag 


//NESTED FUNCTIOND ME CHILD func ke var parent func ke var ko access kar paate hai 

if(true){
    const username = "toshika"
    if(username === "toshika"){
        const website = " youtube"
        console.log(username + website); //this will give no error as both of the vars are in the scope 
    }
    //console.log(website); // ReferenceError: website is not defined
}
// console.log(username); //ReferenceError: username is not defined


//**************INTERESTING*********

//declaration of fucntions in two diff ways 

console.log(addone(3)) // but here it did access the fucntion 
function addone(num){ // normally 
    return num + 1; 
}

console.log(addtwo(4)) //ReferenceError: Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num + 2;
}

