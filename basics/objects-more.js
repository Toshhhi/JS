// singleton or objects using constructors 
// const tinderuser = new Object() // singleton object 
const tinderuser = {} // non singleton object
tinderuser.id = "123"
tinderuser.name = "sammy"
tinderuser.isLoggedIn = false
//console.log(tinderuser);
 

//OBJECT IN OBJECT
const exampleuser = {
    email : "example@gmail.com",
    fullname: {
        userfullname : {
            firstname :"toshika",
            lastname :"goswami"
        }
    }
}
console.log(exampleuser.fullname.userfullname.firstname);

//TO COMBINE/JOIN TWO OBJECTS 

const obj1 = {
    1: "a", 
    2: "b"
}
const obj2 = {
    3: "c",
    4:"d"
}
// const obj3 = Object.assign(obj1,obj2) // to print use --> assign(target: {}, source: any): any The target object to copy to.Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object. 
// console.log(obj3) 
// instead of using this mostly spread (...obj1) vala hi way use hoga 

 // array of objects
 const users = [ // to make 
    {
        id :1
    },
    {
        id :2
    },
    {
        id :3
    }
 ]
console.log(users[1].id); // to access 

console.log(tinderuser);
console.log(Object.keys(tinderuser)); // saari keys ko leke usko array me convert kardega //**imp 
console.log(Object.values(tinderuser));

// to check if the property or key present in the object 
console.log(tinderuser.hasOwnProperty('isLoggedIn')); // will return boolean value obv 



