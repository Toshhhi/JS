// object literal 
const user = {
    username : 'hitesh', 
    age : '15',
    loginCount : '8',
    signedIn :'true',

    getUserDetails : function(){
        // console.log("got user details from db");
        // console.log(`username : ${this.username}`);
        console.log(this);
        
        
    }
}
// console.log(this); // output in browser 
// console.log(user.signedIn);
// console.log(user.getUserDetails());


const promise1 = new Promise()