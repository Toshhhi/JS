const course = {
    coursename : " js in hindi", 
    price : "1000",
    teacher : "Toshika"
}

course.teacher // one way to access 

//another way to access is- 
const {coursename} = course; // const{what to access} = from what object
console.log(coursename); //direct access after that 
const {coursename : newname} = course; // isko new name bhi de sakte hai value vahi rahegi bas newname se bhi call ho jayegi
console.log(newname); // this is known as destructuring the object  



