// to create promises 
const promise1 = new Promise(function(resolve,reject){
    //async tasks 
    //DB calls
    //network calls
    setTimeout(function(){
        console.log("hello 1 ")
        resolve() // connects .then() 
    },1000)
})

// created promise consume bhi karna hta hai 
promise1.then(function(){
    console.log("consumed hello");
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("asynk task");
        resolve() 
    },5000)
}).then(function(){
    console.log("resolves");
})


//passing values in resolve 
const promise3 = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "example.com"})
    },1000)
})

promise3.then(function(user){
console.log(user.email);
})


//using reject 
const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true 
        if(!error){
            resolve({user: "toshika", age : 20})
        }else{
            reject( 'Error : something went wrong')
        }
    },1000);
        
})


//Chaining / use of then (), catch()  and finally()
promise4.then((user)=>{
    return user.age;
}).then((userage) => { 
    console.log(userage);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("finally the promise is either resolved or rejected"))


// using async await instead of then-catch blocks 
const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true 
        if(!error){
            resolve({username : 'toshika'})
        }else{
            reject('error : went wrong')
        }
    }, 1000)
})

async function consumePromise(){
    const response = await promise5
    console.log(response);
}
consumePromise()
