const user = {
    username :  "toshika",
    price : 999, 

    welcomeMessage : function(){
        console.log(`${this.username} welcome to my website`);
        console.log(this); // this refers to the current context that what is that we are talking about rn 
    }
}
//console.log(this);
//user.welcomeMessage()
//user.username = "xyz"
// console.log(this);// since if we did not call any fucntion or object our current context is empty  
//user.welcomeMessage()


// function one(){
//     let username = "toshika"
//     console.log(this.username); // it gives undefined value as an output because "this" doesnt work in fucntion this way
// }
// one()

// const one = function (){
//     let username = "toshika"
//     console.log(this.username); // in this way of declaring function it doesnt work as well bcz of the same rzn
// }

//DECLARING AN ARROW FUNCTION
// const one = () => {
//     let username = "toshika"
//     console.log(this.username); // gives the same o/p , so "this" doesnt even work in arrow functions like that 
// }


//arrow function 
// can add any name as well here(parameters ) => {
//    code
//}

const arrow = (num1, num2) => {
    return num1 + num2 // k/a explicit return 
}

// or can be also written as smt : k/a implicit return
const arrow1 = (num1,num2) => num1 + num2 //without any {}
// or can be also written as 
const arrow2 = (num1,num2) => (num1 + num2) // if you wrap them in {} then writing a return keyword is must else you dont need to return anything

// if you need to return an obj like this then you must add ({object}) them into paranthesis 
// const obj = (num1, num2) => ({username : "toshika"}) // like this 
