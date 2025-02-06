function Function(){ // definition of a function 
    // console.log("toshika");
    // console.log("toshika2");
    // console.log("toshika3");
    // console.log("toshika4");
}
 // Function --> reference of function and will not execute like this 
 Function() // calling of function and will execute like this
//  function add(number1, number2){ // no need to give any datatype in js
//     number1 + number2
//  }

//add(4,"9") // arguements passed the numbers according to the parameters defined in the function 

function add(number1, number2){ // no need to give any datatype in js
    let result = number1 + number2
    console.log("toshika");
    return result // nothing after return executes 
 }

// we can also save the value of a funtion ki execution directly in a variable like- 
const result = add(5,9)
console.log(result); // if i did this it gave "undefiened" as an output cause return type was not given in the function before 

function add(number1, number2){ 
    return number1 + number2 } // one more way to return the ans wihout any new variable 



    function loginuser(username ){
        if(username === undefined){
            console.log("enter a username");
            return 
        }
            return `${username} just logged in!!`
    }

    //console.log(loginuser("Toshika")) // here i have passed a value 
    console.log(loginuser()) // if i donot pass any value then- ? "undefined just logged in!!" output 