let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toTimeString());
console.log(mydate.toJSON());

console.log(typeof mydate); // gives object 
let mycreateddate = new Date(2023,0,23) // months start from 0 in javascript 
console.log(mycreateddate.toDateString());
// mycreateddate = Date(2023,0,23,5,6)
console.log(mycreateddate.toLocaleString()); // toLocaleString used to convert the time to string as well j like in todatestring function 

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(mycreateddate.getTime()); // from the date declared to now milliseconds dega 

console.log(Math.floor(Date.now()/1000)); // here to convert it to second divide by 1000 & to avoid decimal values we use math.floor so that it gives the round off value instead of a decimal uncertain date/value

//to customise .tolocalstring()
mydate.toLocaleString('default', {
    weekday: "short",
    dateStyle:"medium"

})





