// immediately invoked function expression
// global scope ki vajah se function vars pollute ho jati hai uske liye bhi use krte hai isko and to immediately execute the function  

// function chai(){
//     console.log(`db connected`);
    
// }
// chai()

//to execute ifee: function ko parenthesis() ke ander wrap kardenge and call bhi ()parenthesis se karege
//eg:
(function(){ //named ifee
    console.log(`db connected`);  
})();

//ifee can also be executed in arrow functions or function but we have to add ";" in the end to END the previous ifee function execution else it will throw error ; toh last ifee funtion ke end me semicolon lagana zaroori hoga 
//eg: 
(()=>{ //unnamed ifee
    console.log(`db `);  
})()


